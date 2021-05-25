const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOne, userOneId, userTwo, setupDatabase } = require("./fixtures/db");

beforeEach(setupDatabase);

test("should signup a new user", async () => {
    const mockUser = {
        name: "Test",
        email: "email@tester.com",
        password: "newPassword"
    };

    const response = await request(app)
        .post("/api/users/register")
        .send(mockUser)
        .expect(201);

    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    expect(response.body).toMatchObject({
        user: {
            name: user.name,
            email: user.email
        }
    });

    expect(user.password).not.toBe(mockUser.password);
});

test("should not signup user with invalid password", async () => {
    const mockUser = {
        name: "test user",
        email: "email@test.com",
        password: "password"
    };

    const response = await request(app)
        .post("/api/users/register")
        .send(mockUser)
        .expect(400);

    const user = await User.findById(response.body._id);
    expect(user).toBeNull();
});

test("should not signup user with invalid email", async () => {
    const mockUser = {
        name: "test user",
        email: "email@test",
        password: "testPassword"
    };

    const response = await request(app)
        .post("/api/users/register")
        .send(mockUser)
        .expect(400);

    const user = await User.findById(response.body._id);
    expect(user).toBeNull();
});

test("should not signup user with duplicate email", async () => {
    const mockUser = {
        name: "test user",
        email: userOne.email,
        password: "testPassword"
    };

    const response = await request(app)
        .post("/api/users/register")
        .send(mockUser)
        .expect(400);

    const user = await User.findById(response.body._id);
    expect(user).toBeNull();
});

test("should login existing user", async () => {
    const response = await request(app)
        .post("/api/users/login")
        .send({
            email: userOne.email,
            password: userOne.password
        })
        .expect(200);

    // const unparsedCookie = response.header['set-cookie'][0];
    // const tokenFromCookie = unparsedCookie.split(';')[0].split('=')[1];
});

test("should not login non-existing user", async () => {
    await request(app)
        .post("/api/users/login")
        .send({
            email: "-@test.com",
            password: "-"
        })
        .expect(400);
});

test("should get user profile", async () => {
    await request(app)
        .get("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test("should not get user profile", async () => {
    await request(app)
        .get("/api/users/me")
        .set("Cookie", "token=notarealtoken")
        .send()
        .expect(401);
});

test("should delete user account", async () => {
    const response = await request(app)
        .delete("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    const deletedUserData = response.body;
    const user = await User.findById(deletedUserData._id);
    expect(user).toBeNull();
});

test("should not delete user account", async () => {
    await request(app)
        .delete("/api/users/me")
        .set("Authorization", `Bearer `)
        .send()
        .expect(401);
});

test("should upload user avatar image", async () => {
    await request(app)
        .post("/api/users/me/avatar")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .attach("avatar", "tests/fixtures/profile-pic.jpg")
        .expect(200);

    const user = await User.findById(userOne._id);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test("should fail to upload user avatar with invalid file extension", async () => {
    await request(app)
        .post("/api/users/me/avatar")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .attach("avatar", "tests/fixtures/sample-pdf-file.pdf")
        .expect(400);
});

test("should update user with valid fields", async () => {
    await request(app)
        .patch("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send({ name: "Jest" })
        .expect(200);

    const user = await User.findById(userOne._id);
    expect(user.name).toEqual("Jest");
});

test("should not update unauthenticated user", async () => {
    await request(app)
        .patch("/api/users/me")
        .set("Cookie", `token= `)
        .send({ name: "Jest" })
        .expect(401);

    const user = await User.findById(userOne._id);
    expect(user.name).not.toEqual("Jest");
});

test("should not update user with unpermitted fields", async () => {
    await request(app)
        .patch("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send({ invalidField: "test" })
        .expect(400);
});

test("should not update user with email of another user", async () => {
    await request(app)
        .patch("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send({ email: userTwo.email })
        .expect(400);
});

test("should not update user with invalid email", async () => {
    await request(app)
        .patch("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send({ email: "test@com" })
        .expect(400);
});

test("should not update user with invalid password", async () => {
    await request(app)
        .patch("/api/users/me")
        .set("Cookie", `token=${userOne.tokens[0].token}`)
        .send({ password: "password123" })
        .expect(400);
});
