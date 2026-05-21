import { expect } from "chai";
import sinon from "sinon";
import bcrypt from "bcryptjs";

import User from "../src/models/User.js";

import {
  registerUser,
  loginUser,
} from "../src/controllers/authController.js";

describe("Authentication Controller Tests", () => {

  afterEach(() => {
    sinon.restore();
  });

  it("should register a new user", async () => {

    sinon.stub(User, "findOne").resolves(null);

    sinon.stub(User, "create").resolves({
      _id: "12345",
      name: "David",
      email: "david@example.com",
      password: "hashedpassword",
    });

    const req = {
      body: {
        name: "David",
        email: "david@example.com",
        password: "Password123",
      },
    };

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await registerUser(req, res);

    expect(res.status.calledWith(201)).to.equal(true);
  });

  it("should login existing user", async () => {

    const hashedPassword = await bcrypt.hash("Password123", 10);

    sinon.stub(User, "findOne").resolves({
      _id: "12345",
      name: "David",
      email: "david@example.com",
      password: hashedPassword,
    });

    const req = {
      body: {
        email: "david@example.com",
        password: "Password123",
      },
    };

    const res = {
      json: sinon.spy(),
      status: sinon.stub().returnsThis(),
    };

    await loginUser(req, res);

    expect(res.json.calledOnce).to.equal(true);
  });

});