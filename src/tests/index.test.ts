/* eslint-disable @typescript-eslint/ban-ts-comment */
// import crypto from "crypto";

import { InterpolationOptions, configureHydrateText, hydrateText } from "..";

// Inspired by: https://stackoverflow.com/a/11869589/11293963
// const getHash = (string: string) =>
// 	crypto.createHash("md5").update(string).digest("hex");

const hydrateRoute = configureHydrateText({
	prefix: ":",
	suffix: "",
});

const replaceLetters = configureHydrateText({
	prefix: "",
	suffix: "",
});

test("Positive test case: e3d1bd7920d571fae01eb16c3b8343ba", () => {
	// console.log(getHash(`hydrateText("")`));
	const resultText = hydrateText("");

	expect(resultText).toBe("");
});

test("Positive test case: 18d6dbe5774751098a4a74c590ef53c0", () => {
	// console.log(getHash(`hydrateText("Hello World!")`));
	const resultText = hydrateText("Hello World!");

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: 4260b34d10b016b41c1b7509cbe699fd", () => {
	// console.log(getHash(`hydrateText("Hello, {username}!")`));
	const resultText = hydrateText("Hello, {username}!");

	expect(resultText).toBe("Hello, {username}!");
});

test("Positive test case: 2af2fc130be13f625c9c5adafd808471", () => {
	// console.log(getHash(`hydrateText("", {})`));
	const resultText = hydrateText("", {});

	expect(resultText).toBe("");
});

test("Positive test case: c4bb40eefc35e88d5779a86a99560386", () => {
	// console.log(getHash(`hydrateText("Hello World!", {})`));
	const resultText = hydrateText("Hello World!", {});

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: 42301541eb3fc4573221705d2113b799", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {username}!", {
	//   username: "John",
	// })`),
	// );
	const resultText = hydrateText("Hello, {username}!", {
		username: "John",
	});

	expect(resultText).toBe("Hello, John!");
});

test("Positive test case: 383c38f885d84ebd652223325669afd1", () => {
	// console.log(
	//   getHash(`hydrateText("{firstName} {lastName}", {
	//     firstName: "John",
	//     lastName: "Doe",
	//   })`),
	// );
	const resultText = hydrateText("{firstName} {lastName}", {
		firstName: "John",
		lastName: "Doe",
	});

	expect(resultText).toBe("John Doe");
});

test("Positive test case: 4fadf44d831fc988cf92fa78c54e8b5e", () => {
	// console.log(
	//   getHash(`hydrateText("Active: {isActive}", {
	//     isActive: true,
	//   })`),
	// );
	const resultText = hydrateText("Active: {isActive}", {
		isActive: true,
	});

	expect(resultText).toBe("Active: true");
});

test("Positive test case: b3178c3166956e50643e4267c312607e", () => {
	// console.log(
	//   getHash(`hydrateText("Seconds: {seconds}", {
	//     seconds: 1_000_000,
	//   })`),
	// );
	const resultText = hydrateText("Seconds: {seconds}", {
		seconds: 1_000_000,
	});

	expect(resultText).toBe("Seconds: 1000000");
});

test("Positive test case: 4e55ba820ff0a4c8e2a7c925e7693c2b", () => {
	// console.log(
	//   getHash(`hydrateText("milliseconds: {milliseconds}", {
	//     milliseconds: BigInt(9007199254740991),
	//   })`),
	// );
	const resultText = hydrateText("milliseconds: {milliseconds}", {
		milliseconds: BigInt(9007199254740991),
	});

	expect(resultText).toBe("milliseconds: 9007199254740991");
});

test("Positive test case: af9b1b362e6dee5ed69f10bb7e397c95", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {{username}}!", {
	//     username: "John",
	//   })`),
	// );
	const resultText = hydrateText("Hello, {{username}}!", {
		username: "John",
	});

	expect(resultText).toBe("Hello, {John}!");
});

test("Positive test case: 18cd8d6e9f8325289789633dfe77000f", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: "{",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		{
			username: "John",
		},
		{
			prefix: "{",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Positive test case: 01f2345edad7d94b6f753581a2b17a27", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {{username}}!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: "{{",
	//       suffix: "}}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {{username}}!",
		{
			username: "John",
		},
		{
			prefix: "{{",
			suffix: "}}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Positive test case: 4a43c157fab840b304b4748a07267f6b", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, \${username}!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: "\${",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, ${username}!",
		{
			username: "John",
		},
		{
			prefix: "${",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Positive test case: ab65a82ede035969c3b775a4c12c4532", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     ":firstName: :lastName:",
	//     {
	//       firstName: "John",
	//       lastName: "Doe",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		":firstName: :lastName:",
		{
			firstName: "John",
			lastName: "Doe",
		},
		{
			prefix: ":",
			suffix: ":",
		},
	);

	expect(resultText).toBe("John Doe");
});

test("Positive test case: 92b4b1b542a73f57476f371932510d1a", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id",
		{
			id: 42,
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42");
});

test("Positive test case: c14763e95536731399382dee040a5602", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id:username",
	//     {
	//       id: 42,
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id:username",
		{
			id: 42,
			username: "John",
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42John");
});

test("Positive test case: 7fa77b7792d13b8567c8e9a6c82195dd", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "username: - Software Engineer",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: "",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"username: - Software Engineer",
		{
			username: "John",
		},
		{
			prefix: "",
			suffix: ":",
		},
	);

	expect(resultText).toBe("John - Software Engineer");
});

test("Positive test case: 78a37c77100f73d67498ae4ff83ddf53", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "user",
	//     {
	//       u: "{U}",
	//       s: "<S>",
	//       e: "(E)",
	//       r: "[R]",
	//     },
	//     {
	//       prefix: "",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"user",
		{
			u: "{U}",
			s: "<S>",
			e: "(E)",
			r: "[R]",
		},
		{
			prefix: "",
			suffix: "",
		},
	);

	expect(resultText).toBe("{U}<S>(E)[R]");
});

test("Positive test case: 5eaa48bee5ae430cbab0ff3746c27a53", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       id: 42,
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     } as unknown as InterpolationOptions<":", "/">,
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		{
			id: 42,
			username: "John",
		},
		{
			prefix: ":",
			suffix: "",
		} as unknown as InterpolationOptions<":", "/">,
	);

	expect(resultText).toBe("/user/42/John/");
});

test("Positive test case: f73fa2573b43438a2ac9a52706e2604b", () => {
	// console.log(getHash(`hydrateText("Hello World!" as string)`));
	const resultText = hydrateText("Hello World!" as string);

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: 707af50942d29b5c46fe7d0c0b381b3c", () => {
	// console.log(getHash(`hydrateText("Hello World!" as string, {})`));
	const resultText = hydrateText("Hello World!" as string, {});

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: e37d01f00d8432804eeaa6add2cc7a9a", () => {
	// console.log(
	//   getHash(`hydrateText("Hello World!" as string, {
	//   username: "John",
	// })`),
	// );
	const resultText = hydrateText("Hello World!" as string, {
		username: "John",
	});

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: bf580c9c905ee5f255a28e6b850347f9", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {username}!" as string, {
	//     username: "John",
	//   })`),
	// );
	const resultText = hydrateText("Hello, {username}!" as string, {
		username: "John",
	});

	expect(resultText).toBe("Hello, John!");
});

test("Positive test case: cdcdac2c1b868bc728472cd6cbba271f", () => {
	// console.log(getHash(`hydrateRoute("")`));
	const resultText = hydrateRoute("");

	expect(resultText).toBe("");
});

test("Positive test case: d666a945c62ffbb4dfbefa886e1f9b7d", () => {
	// console.log(getHash(`hydrateRoute("Hello World!")`));
	const resultText = hydrateRoute("Hello World!");

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: 176fa7cbde3554852920b8117ffd06ec", () => {
	// console.log(getHash(`hydrateRoute("Hello, {username}!")`));
	const resultText = hydrateRoute("Hello, {username}!");

	expect(resultText).toBe("Hello, {username}!");
});

test("Positive test case: df846302df158f3abb4a2cdb8ab14af9", () => {
	// console.log(getHash(`hydrateRoute("", {})`));
	const resultText = hydrateRoute("", {});

	expect(resultText).toBe("");
});

test("Positive test case: 6e3983ff1c1769fc3fce68ad636ed0e1", () => {
	// console.log(getHash(`hydrateRoute("Hello World!", {})`));
	const resultText = hydrateRoute("Hello World!", {});

	expect(resultText).toBe("Hello World!");
});

test("Positive test case: 387e00c55433a77cb30054261f8dbd70", () => {
	// console.log(getHash(`hydrateRoute("/user/:id")`));
	const resultText = hydrateRoute("/user/:id");

	expect(resultText).toBe("/user/:id");
});

test("Positive test case: e39e3bddb6906f26f5e28be34a529d50", () => {
	// console.log(
	//   getHash(`hydrateRoute("/user/:id", {
	//   id: 42,
	// })`),
	// );
	const resultText = hydrateRoute("/user/:id", {
		id: 42,
	});

	expect(resultText).toBe("/user/42");
});

test("Positive test case: 4fc02ff80bd4bb296c9a06506040314a", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/(id)",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: "(",
	//       suffix: ")",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/(id)",
		{
			id: 42,
		},
		{
			prefix: "(",
			suffix: ")",
		},
	);

	expect(resultText).toBe("/user/42");
});

test("Positive test case: a50d6c6a7ee526b764bfd112c69ec773", () => {
	// console.log(
	//   getHash(`replaceLetters("user", {
	//     u: "{U}",
	//     s: "<S>",
	//     e: "(E)",
	//     r: "[R]",
	//   })`),
	// );
	const resultText = replaceLetters("user", {
		u: "{U}",
		s: "<S>",
		e: "(E)",
		r: "[R]",
	});

	expect(resultText).toBe("{U}<S>(E)[R]");
});

test("Positive test case: 848097af194354e7e59c3a06a33f8844", () => {
	// console.log(getHash(`replaceLetters("some very, very long text")`));
	const resultText = replaceLetters("Some very, very long text");

	expect(resultText).toBe("Some very, very long text");
});

test("Negative test case: 538c85cdc1d3a5cf2ae0077f35e2637b", () => {
	// console.log(getHash(`hydrateText()`));
	// @ts-expect-error
	const resultText = hydrateText();

	expect(resultText).toBeUndefined();
});

test("Negative test case: c0b9f39290ad14fc77623be376dfaac2", () => {
	// console.log(
	//   getHash(`hydrateText(
	//   "Hello, {username}!",
	//   {},
	// )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: 58a3497c15b738181ef24073d786f7d9", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {username}!", {
	//     username: undefined,
	//   })`),
	// );
	const resultText = hydrateText("Hello, {username}!", {
		// @ts-expect-error
		username: undefined,
	});

	expect(resultText).toBe("Hello, undefined!");
});

test("Negative test case: fe4f227e4972390d9994afb20a31710e", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {username}!", {
	//     username: null,
	//   })`),
	// );
	const resultText = hydrateText("Hello, {username}!", {
		// @ts-expect-error
		username: null,
	});

	expect(resultText).toBe("Hello, null!");
});

test("Negative test case: fcab2ac81409176546edb81215cb36e3", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {username}!", {
	//     USER_NAME: "John",
	//   })`),
	// );
	const resultText = hydrateText("Hello, {username}!", {
		// @ts-expect-error
		USER_NAME: "John",
	});

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: 4a15b9e240f46eba186c41d0f4664e96", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {username}!", {
	//     username: "John",
	//     id: 42,
	//   })`),
	// );
	const resultText = hydrateText("Hello, {username}!", {
		username: "John",
		// @ts-expect-error
		id: 42,
	});

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 432b9aa3ca520135b7c26882b8673e3a", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "{firstName} {lastName}",
	//     {
	//       firstName: "John",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"{firstName} {lastName}",
		// @ts-expect-error
		{
			firstName: "John",
		},
	);

	expect(resultText).toBe("John {lastName}");
});

test("Negative test case: 126b3de3b75053ad49d66743f0c8f274", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "{firstName} {lastName}",
	//     {
	//       lastName: "Doe",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"{firstName} {lastName}",
		// @ts-expect-error
		{
			lastName: "Doe",
		},
	);

	expect(resultText).toBe("{firstName} Doe");
});

test("Negative test case: ebd0a6612f82a8ed0031d9e059ef0615", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Active: {isActive}",
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"Active: {isActive}",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("Active: {isActive}");
});

test("Negative test case: 03cb3b83ce958f1812469d094b6cdfae", () => {
	// console.log(
	//   getHash(`hydrateText("Active: {isActive}", {
	//     IS_ACTIVE: true,
	//   })`),
	// );
	const resultText = hydrateText("Active: {isActive}", {
		// @ts-expect-error
		IS_ACTIVE: true,
	});

	expect(resultText).toBe("Active: {isActive}");
});

test("Negative test case: 0b3f978b784258a5f01b26fc805f9c6e", () => {
	// console.log(
	//   getHash(`hydrateText("Active: {isActive}", {
	//     isActive: true,
	//     id: 42,
	//   })`),
	// );
	const resultText = hydrateText("Active: {isActive}", {
		isActive: true,
		// @ts-expect-error
		id: 42,
	});

	expect(resultText).toBe("Active: true");
});

test("Negative test case: b857c06caab24cdc873168a7aff76206", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Seconds: {seconds}",
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"Seconds: {seconds}",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("Seconds: {seconds}");
});

test("Negative test case: 8e59d5c4458f80f22cc1bb24502ffc99", () => {
	// console.log(
	//   getHash(`hydrateText("Seconds: {seconds}", {
	//     SECONDS: 1_000_000,
	//   })`),
	// );
	const resultText = hydrateText("Seconds: {seconds}", {
		// @ts-expect-error
		SECONDS: 1_000_000,
	});

	expect(resultText).toBe("Seconds: {seconds}");
});

test("Negative test case: d92b0750a9e4c02c76844b6744ee2573", () => {
	// console.log(
	//   getHash(`hydrateText("Seconds: {seconds}", {
	//     seconds: 1_000_000,
	//     id: 42,
	//   })`),
	// );
	const resultText = hydrateText("Seconds: {seconds}", {
		seconds: 1_000_000,
		// @ts-expect-error
		id: 42,
	});

	expect(resultText).toBe("Seconds: 1000000");
});

test("Negative test case: 306c99b7df15ec74284c55546c12a78f", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "milliseconds: {milliseconds}",
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"milliseconds: {milliseconds}",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("milliseconds: {milliseconds}");
});

test("Negative test case: 560e0c8cadd217f0ae283e385ae3c3af", () => {
	// console.log(
	//   getHash(`hydrateText("milliseconds: {milliseconds}", {
	//     MILLISECONDS: BigInt(9007199254740991),
	//   })`),
	// );
	const resultText = hydrateText("milliseconds: {milliseconds}", {
		// @ts-expect-error
		MILLISECONDS: BigInt(9007199254740991),
	});

	expect(resultText).toBe("milliseconds: {milliseconds}");
});

test("Negative test case: 6f33cc35f75acf0daf730f245d5feb1b", () => {
	// console.log(
	//   getHash(`hydrateText("milliseconds: {milliseconds}", {
	//     milliseconds: BigInt(9007199254740991),
	//     id: 42,
	//   })`),
	// );
	const resultText = hydrateText("milliseconds: {milliseconds}", {
		milliseconds: BigInt(9007199254740991),
		// @ts-expect-error
		id: 42,
	});

	expect(resultText).toBe("milliseconds: 9007199254740991");
});

test("Negative test case: 3c30106444675dad01d6e308ea5298e5", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {{username}}!",
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {{username}}!",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("Hello, {{username}}!");
});

test("Negative test case: c8259b5a3f9405752fb2b709ed4fcbc9", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {{username}}!", {
	//     USER_NAME: "John",
	//   })`),
	// );
	const resultText = hydrateText("Hello, {{username}}!", {
		// @ts-expect-error
		USER_NAME: "John",
	});

	expect(resultText).toBe("Hello, {{username}}!");
});

test("Negative test case: 600317192a267b2cd4f60e4b75e6ef1e", () => {
	// console.log(
	//   getHash(`hydrateText("Hello, {{username}}!", {
	//     username: "John",
	//     id: 42,
	//   })`),
	// );
	const resultText = hydrateText("Hello, {{username}}!", {
		username: "John",
		// @ts-expect-error
		id: 42,
	});

	expect(resultText).toBe("Hello, {John}!");
});

test("Negative test case: 48795b7f39073c2426d99a61682ae5e7", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {},
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		// @ts-expect-error
		{},
		{},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: a914816d90fad99932117e5456a21aaf", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {
	//       username: "John",
	//     },
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		{
			username: "John",
		},
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: f950113749305f4c4de6fd839b3b1369", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, undefinedusernameundefined!",
	//     {
	//       username: "John",
	//     },
	//     {},
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, undefinedusernameundefined!",
		{
			username: "John",
		},
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 57e4397507e57f28d1e35f53434bbf37", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: "{",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		{
			username: "John",
		},
		// @ts-expect-error
		{
			prefix: "{",
		},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: ad24b69c8825b9b8e1589b644b2a210f", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {usernameundefined!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: "{",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {usernameundefined!",
		{
			username: "John",
		},
		// @ts-expect-error
		{
			prefix: "{",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 09850c180d83e1aad23c5c71759bf52a", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		{
			username: "John",
		},
		// @ts-expect-error
		{
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: f2c4500d7b81642533ff7937559d4c1d", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, undefinedusername}!",
	//     {
	//       username: "John",
	//     },
	//     {
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, undefinedusername}!",
		{
			username: "John",
		},
		// @ts-expect-error
		{
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 0f446ad7b42fc3094ab94e1941a60a7b", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {},
	//     {
	//       prefix: "{",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		// @ts-expect-error
		{},
		{
			prefix: "{",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: 8e5661fb387b52bd5735f01a74973d96", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {
	//       USER_NAME: "John",
	//     },
	//     {
	//       prefix: "{",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		{
			// @ts-expect-error
			USER_NAME: "John",
		},
		{
			prefix: "{",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, {username}!");
});

test("Negative test case: 5742652cc6a193a17e668bb472a4ff00", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {username}!",
	//     {
	//       username: "John",
	//       id: 42,
	//     },
	//     {
	//       prefix: "{",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {username}!",
		{
			username: "John",
			// @ts-expect-error
			id: 42,
		},
		{
			prefix: "{",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 70c1cba604a5c4ea8eaffc5c732c963b", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {{username}}!",
	//     {},
	//     {
	//       prefix: "{{",
	//       suffix: "}}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {{username}}!",
		// @ts-expect-error
		{},
		{
			prefix: "{{",
			suffix: "}}",
		},
	);

	expect(resultText).toBe("Hello, {{username}}!");
});

test("Negative test case: 6dc30b8715b383edc7da72be0f0c39bc", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {{username}}!",
	//     {
	//       USER_NAME: "John",
	//     },
	//     {
	//       prefix: "{{",
	//       suffix: "}}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {{username}}!",
		{
			// @ts-expect-error
			USER_NAME: "John",
		},
		{
			prefix: "{{",
			suffix: "}}",
		},
	);

	expect(resultText).toBe("Hello, {{username}}!");
});

test("Negative test case: d1322ac7a747e94a5b2d1a6644261813", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, {{username}}!",
	//     {
	//       username: "John",
	//       id: 42,
	//     },
	//     {
	//       prefix: "{{",
	//       suffix: "}}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, {{username}}!",
		{
			username: "John",
			// @ts-expect-error
			id: 42,
		},
		{
			prefix: "{{",
			suffix: "}}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 019d348956f4a1c679ac5412cd1abf60", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, \${username}!",
	//     {},
	//     {
	//       prefix: "\${",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, ${username}!",
		// @ts-expect-error
		{},
		{
			prefix: "${",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, ${username}!");
});

test("Negative test case: 2b54c91bd343d5dc6844dbeb24600b21", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, \${username}!",
	//     {
	//       USER_NAME: "John",
	//     },
	//     {
	//       prefix: "\${",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, ${username}!",
		{
			// @ts-expect-error

			USER_NAME: "John",
		},
		{
			prefix: "${",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, ${username}!");
});

test("Negative test case: fd6dd1e7a9bf66cf8f0033bf0070e175", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "Hello, \${username}!",
	//     {
	//       username: "John",
	//       id: 42,
	//     },
	//     {
	//       prefix: "\${",
	//       suffix: "}",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"Hello, ${username}!",
		{
			username: "John",
			// @ts-expect-error
			id: 42,
		},
		{
			prefix: "${",
			suffix: "}",
		},
	);

	expect(resultText).toBe("Hello, John!");
});

test("Negative test case: 12a32a5b6289285455b978bccb3160ca", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     ":firstName: :lastName:",
	//     {},
	//     {
	//       prefix: ":",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		":firstName: :lastName:",
		// @ts-expect-error
		{},
		{
			prefix: ":",
			suffix: ":",
		},
	);

	expect(resultText).toBe(":firstName: :lastName:");
});

test("Negative test case: 8fbb51b6cb87f8efaccbf1efe4e40792", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     ":firstName: :lastName:",
	//     {
	//       firstName: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		":firstName: :lastName:",
		// @ts-expect-error
		{
			firstName: "John",
		},
		{
			prefix: ":",
			suffix: ":",
		},
	);

	expect(resultText).toBe("John :lastName:");
});

test("Negative test case: e27328ae9324195ae0d56f654846f8df", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     ":firstName: :lastName:",
	//     {
	//       lastName: "Doe",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		":firstName: :lastName:",
		// @ts-expect-error
		{
			lastName: "Doe",
		},
		{
			prefix: ":",
			suffix: ":",
		},
	);

	expect(resultText).toBe(":firstName: Doe");
});

test("Negative test case: 93b1ffde814c82af41354cbb408fe758", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     ":firstName: :lastName:",
	//     {
	//       firstName: "John",
	//       lastName: "Doe",
	//       id: 42,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		":firstName: :lastName:",
		{
			firstName: "John",
			lastName: "Doe",
			// @ts-expect-error
			id: 42,
		},
		{
			prefix: ":",
			suffix: ":",
		},
	);

	expect(resultText).toBe("John Doe");
});

test("Negative test case: dca4da146c2a1a3151758d3a489cf625", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id",
	//     {},
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id",
		// @ts-expect-error
		{},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/:id");
});

test("Negative test case: f24a61461b3a53a54c3f8be983a36e9b", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id",
	//     {
	//       ID: 42,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id",
		{
			// @ts-expect-error
			ID: 42,
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/:id");
});

test("Negative test case: 23d33d2b73409e7e0ad781c6fe9d2f0f", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id",
	//     {
	//       id: 42,
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id",
		{
			id: 42,
			// @ts-expect-error
			username: "John",
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42");
});

test("Negative test case: 2fc2c3180c1d6d00f46b61de4da70490", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id:username",
	//     {},
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id:username",
		// @ts-expect-error
		{},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/:id:username");
});

test("Negative test case: 3cd3cb9b568dfc4278706a1b9a3569be", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id:username",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id:username",
		// @ts-expect-error
		{
			id: 42,
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42:username");
});

test("Negative test case: 77fe5fa145abed7db81f53a7bcfef672", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id:username",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id:username",
		// @ts-expect-error
		{
			username: "John",
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/:idJohn");
});

test("Negative test case: c2fc6a631abb5bc533ffa79ce8c424d3", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "/user/:id:username",
	//     {
	//       id: 42,
	//       username: "John",
	//       isActive: true,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"/user/:id:username",
		{
			id: 42,
			username: "John",
			// @ts-expect-error
			isActive: true,
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42John");
});

test("Negative test case: f8c0e7dfd3c704d8d2cbf87ea79eb7f3", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "username: - Software Engineer",
	//     {},
	//     {
	//       prefix: "",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"username: - Software Engineer",
		// @ts-expect-error
		{},
		{
			prefix: "",
			suffix: ":",
		},
	);

	expect(resultText).toBe("username: - Software Engineer");
});

test("Negative test case: 5d64c1ca0bd22edf1fbd4ee4082851aa", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "username: - Software Engineer",
	//     {
	//       USER_NAME: "John",
	//     },
	//     {
	//       prefix: "",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"username: - Software Engineer",
		{
			// @ts-expect-error
			USER_NAME: "John",
		},
		{
			prefix: "",
			suffix: ":",
		},
	);

	expect(resultText).toBe("username: - Software Engineer");
});

test("Negative test case: 2799c5011a9c8c8ce494f684c2363a62", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "username: - Software Engineer",
	//     {
	//       username: "John",
	//       id: 42,
	//     },
	//     {
	//       prefix: "",
	//       suffix: ":",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"username: - Software Engineer",
		{
			username: "John",
			// @ts-expect-error
			id: 42,
		},
		{
			prefix: "",
			suffix: ":",
		},
	);

	expect(resultText).toBe("John - Software Engineer");
});

test("Negative test case: f15576c900a23aece67b8790f75d5c5b", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "user",
	//     {},
	//     {
	//       prefix: "",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"user",
		// @ts-expect-error
		{},
		{
			prefix: "",
			suffix: "",
		},
	);

	expect(resultText).toBe("user");
});

test("Negative test case: b4395ed60e6df24fcaf8c64a73506564", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "user",
	//     {
	//       u: "{U}",
	//     },
	//     {
	//       prefix: "",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"user",
		// @ts-expect-error
		{
			u: "{U}",
		},
		{
			prefix: "",
			suffix: "",
		},
	);

	expect(resultText).toBe("{U}ser");
});

test("Negative test case: 5301902ac4bc03f4d189138ff78aa7dd", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "user",
	//     {
	//       u: "{U}",
	//       s: "<S>",
	//     },
	//     {
	//       prefix: "",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"user",
		// @ts-expect-error
		{
			u: "{U}",
			s: "<S>",
		},
		{
			prefix: "",
			suffix: "",
		},
	);

	expect(resultText).toBe("{U}<S>er");
});

test("Negative test case: 629e103c775ff70bf24e4ce8d895dfc6", () => {
	// console.log(
	//   getHash(`hydrateText(
	//     "user",
	//     {
	//       u: "{U}",
	//       s: "<S>",
	//       e: "(E)",
	//       r: "[R]",
	//       x: "-X-",
	//     },
	//     {
	//       prefix: "",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText(
		"user",
		{
			u: "{U}",
			s: "<S>",
			e: "(E)",
			r: "[R]",
			// @ts-expect-error
			x: "-X-",
		},
		{
			prefix: "",
			suffix: "",
		},
	);

	expect(resultText).toBe("{U}<S>(E)[R]");
});

test("Negative test case: 62f126044c723f6c33cf0b3e4b49cd1e", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {},
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		// @ts-expect-error
		{},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/:id/:username/");
});

test("Negative test case: 9e145f684808799c252a3b9dcc83b0a8", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		// @ts-expect-error
		{
			id: 42,
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42/:username/");
});

test("Negative test case: 1d183b36f9bebd6611286603ac6ea03f", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		// @ts-expect-error
		{
			username: "John",
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/:id/John/");
});

test("Negative test case: b4b07415edd487c532b4390271acba48", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       id: 42,
	//       username: "John",
	//       isActive: true,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		{
			id: 42,
			username: "John",
			// @ts-expect-error
			isActive: true,
		},
		{
			prefix: ":",
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42/John/");
});

test("Negative test case: 262e61bc664f60e8aeb5b3112da513a1", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       id: 42,
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     },
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		{
			id: 42,
			username: "John",
		},
		{
			prefix: ":",
			// @ts-expect-error
			suffix: "",
		},
	);

	expect(resultText).toBe("/user/42/John/");
});

test("Negative test case: bea0800f7db8cac5f8bc89cf890f8c98", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {},
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     } as unknown as InterpolationOptions<":", "/">,
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		// @ts-expect-error
		{},
		{
			prefix: ":",
			suffix: "",
		} as unknown as InterpolationOptions<":", "/">,
	);

	expect(resultText).toBe("/user/:id/:username/");
});

test("Negative test case: 210ad704a05d205283be9bd851ee9da8", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     } as unknown as InterpolationOptions<":", "/">,
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		// @ts-expect-error
		{
			id: 42,
		},
		{
			prefix: ":",
			suffix: "",
		} as unknown as InterpolationOptions<":", "/">,
	);

	expect(resultText).toBe("/user/42/:username/");
});

test("Negative test case: b7e74a2db86e541d3dad8fdb361b73d5", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       username: "John",
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     } as unknown as InterpolationOptions<":", "/">,
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		// @ts-expect-error
		{
			username: "John",
		},
		{
			prefix: ":",
			suffix: "",
		} as unknown as InterpolationOptions<":", "/">,
	);

	expect(resultText).toBe("/user/:id/John/");
});

test("Negative test case: cd001933ed729c3509d23b847c266c75", () => {
	// console.log(
	//   getHash(`hydrateText<"/user/:id/:username/", ":", "/">(
	//     "/user/:id/:username/",
	//     {
	//       id: 42,
	//       username: "John",
	//       isActive: true,
	//     },
	//     {
	//       prefix: ":",
	//       suffix: "",
	//     } as unknown as InterpolationOptions<":", "/">,
	//   )`),
	// );
	const resultText = hydrateText<"/user/:id/:username/", ":", "/">(
		"/user/:id/:username/",
		{
			id: 42,
			username: "John",
			// @ts-expect-error
			isActive: true,
		},
		{
			prefix: ":",
			suffix: "",
		} as unknown as InterpolationOptions<":", "/">,
	);

	expect(resultText).toBe("/user/42/John/");
});

test("Negative test case: 318796ae08e53e90f10ed2d5dfa737f6", () => {
	// console.log(getHash(`hydrateRoute()`));
	// @ts-expect-error
	const resultText = hydrateRoute();

	expect(resultText).toBeUndefined();
});

test("Negative test case: 4f4fd053c4fea88c9b5986fa6e78571c", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//   "/user/:id",
	//   {},
	// )`),
	// );
	const resultText = hydrateRoute(
		"/user/:id",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("/user/:id");
});

test("Negative test case: bbd65218fd0703080e2709b24364df2b", () => {
	// console.log(
	//   getHash(`hydrateRoute("/user/:id", {
	//     ID: 42,
	//   })`),
	// );
	const resultText = hydrateRoute("/user/:id", {
		// @ts-expect-error
		ID: 42,
	});

	expect(resultText).toBe("/user/:id");
});

test("Negative test case: 6cd689e4ed7bc823683d994ebb393757", () => {
	// console.log(
	//   getHash(`hydrateRoute("/user/:id", {
	//     id: 42,
	//     username: "John",
	//   })`),
	// );
	const resultText = hydrateRoute("/user/:id", {
		id: 42,
		// @ts-expect-error
		username: "John",
	});

	expect(resultText).toBe("/user/42");
});

test("Negative test case: e95f207e9eaa2b21feaff941f6cd7038", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/:id:username",
	//     {},
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/:id:username",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("/user/:id:username");
});

test("Negative test case: ea721ecccc2112a68ad21d47d240777a", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/:id:username",
	//     {
	//       username: "John",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/:id:username",
		// @ts-expect-error
		{
			username: "John",
		},
	);

	expect(resultText).toBe("/user/:idJohn");
});

test("Negative test case: 38bb62fb4be465bc27a6bd5c0299bb52", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/:id:username",
	//     {
	//       id: 42,
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/:id:username",
		// @ts-expect-error
		{
			id: 42,
		},
	);

	expect(resultText).toBe("/user/42:username");
});

test("Negative test case: 8a1ca67b89dab1a7bdbd3a1cd1b0d1ed", () => {
	// console.log(
	//   getHash(`hydrateRoute("/user/:id:username", {
	//     id: 42,
	//     username: "John",
	//     isActive: true,
	//   })`),
	// );
	const resultText = hydrateRoute("/user/:id:username", {
		id: 42,
		username: "John",
		// @ts-expect-error
		isActive: true,
	});

	expect(resultText).toBe("/user/42John");
});

test("Negative test case: 92b41b81af940608db31d005741a6c6c", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/(id)",
	//     {},
	//     {
	//       prefix: "(",
	//       suffix: ")",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/(id)",
		// @ts-expect-error
		{},
		{
			prefix: "(",
			suffix: ")",
		},
	);

	expect(resultText).toBe("/user/(id)");
});

test("Negative test case: 823c18ebf1669a4d28a85355c563c3c3", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/(id)",
	//     {
	//       ID: 42,
	//     },
	//     {
	//       prefix: "(",
	//       suffix: ")",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/(id)",
		{
			// @ts-expect-error
			ID: 42,
		},
		{
			prefix: "(",
			suffix: ")",
		},
	);

	expect(resultText).toBe("/user/(id)");
});

test("Negative test case: 5e49f161e48aa13c6360ca4cc3bf535d", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/(id)",
	//     {
	//       id: 42,
	//       username: "John",
	//     },
	//     {
	//       prefix: "(",
	//       suffix: ")",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/(id)",
		{
			id: 42,
			// @ts-expect-error
			username: "John",
		},
		{
			prefix: "(",
			suffix: ")",
		},
	);

	expect(resultText).toBe("/user/42");
});

test("Negative test case: d7e87174c35b0a36b6edf7683372eccd", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/(id",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: "(",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/(id",
		{
			id: 42,
		},
		// @ts-expect-error
		{
			prefix: "(",
		},
	);

	expect(resultText).toBe("/user/(id");
});

test("Negative test case: dea3dc9c2eed148b9535cbdde3835a43", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/(idundefined",
	//     {
	//       id: 42,
	//     },
	//     {
	//       prefix: "(",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/(idundefined",
		{
			// @ts-expect-error
			id: 42,
		},
		{
			prefix: "(",
		},
	);

	expect(resultText).toBe("/user/42");
});

test("Negative test case: 0715c3ceaa37e39b9b2d9ebf4c5b6c76", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/:id)",
	//     {
	//       id: 42,
	//     },
	//     {
	//       suffix: ")",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/:id)",
		{
			id: 42,
		},
		// @ts-expect-error
		{
			suffix: ")",
		},
	);

	expect(resultText).toBe("/user/:id)");
});

test("Negative test case: 844652a9cccbb162634eedc03161bcae", () => {
	// console.log(
	//   getHash(`hydrateRoute(
	//     "/user/undefinedid)",
	//     {
	//       id: 42,
	//     },
	//     {
	//       suffix: ")",
	//     },
	//   )`),
	// );
	const resultText = hydrateRoute(
		"/user/undefinedid)",
		{
			id: 42,
		},
		// @ts-expect-error
		{
			suffix: ")",
		},
	);

	expect(resultText).toBe("/user/42");
});

test("Negative test case: bf02495a5023dea7a9f35e7849b2ba1c", () => {
	// console.log(
	//   getHash(`replaceLetters(
	//     "user",
	//     {},
	//   )`),
	// );
	const resultText = replaceLetters(
		"user",
		// @ts-expect-error
		{},
	);

	expect(resultText).toBe("user");
});

test("Negative test case: f4460942636b17ae0beaa197dc5cb8ab", () => {
	// console.log(
	//   getHash(`replaceLetters(
	//     "user",
	//     {
	//       u: "{U}",
	//     },
	//   )`),
	// );
	const resultText = replaceLetters(
		"user",
		// @ts-expect-error
		{
			u: "{U}",
		},
	);

	expect(resultText).toBe("{U}ser");
});

test("Negative test case: e90c03a47d7cbc56fb2f5dd44bebe162", () => {
	// console.log(
	//   getHash(`replaceLetters(
	//     "user",
	//     {
	//       u: "{U}",
	//       s: "<S>",
	//     },
	//   )`),
	// );
	const resultText = replaceLetters(
		"user",
		// @ts-expect-error
		{
			u: "{U}",
			s: "<S>",
		},
	);

	expect(resultText).toBe("{U}<S>er");
});

test("Negative test case: 6001dba4f00a338fc6409af6788b0879", () => {
	// console.log(
	//   getHash(`replaceLetters("user", {
	//     u: "{U}",
	//     s: "<S>",
	//     e: "(E)",
	//     r: "[R]",
	//     x: "-X-",
	//   })`),
	// );
	const resultText = replaceLetters("user", {
		u: "{U}",
		s: "<S>",
		e: "(E)",
		r: "[R]",
		// @ts-expect-error
		x: "-X-",
	});

	expect(resultText).toBe("{U}<S>(E)[R]");
});
