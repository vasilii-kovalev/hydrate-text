import { InterpolationOptions, configureHydrateText, hydrateText } from "..";

// Test Id: 538c85cdc1d3a5cf2ae0077f35e2637b
// THROWS Expected 1-3 arguments, but got 0.
hydrateText();

// Test Id: c0b9f39290ad14fc77623be376dfaac2
hydrateText(
	"Hello, {username}!",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
);

// Test Id: 58a3497c15b738181ef24073d786f7d9
hydrateText("Hello, {username}!", {
	// THROWS Type 'undefined' is not assignable to type 'ValueType'.
	username: undefined,
});

// Test Id: fe4f227e4972390d9994afb20a31710e
hydrateText("Hello, {username}!", {
	// THROWS Type 'null' is not assignable to type 'ValueType'.
	username: null,
});

// Test Id: fcab2ac81409176546edb81215cb36e3
hydrateText("Hello, {username}!", {
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	USER_NAME: "John",
});

// Test Id: 4a15b9e240f46eba186c41d0f4664e96
hydrateText("Hello, {username}!", {
	username: "John",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	id: 42,
});

// Test Id: 432b9aa3ca520135b7c26882b8673e3a
hydrateText(
	"{firstName} {lastName}",
	// THROWS not assignable to parameter of type 'Record<"firstName" | "lastName", ValueType>'.
	{
		firstName: "John",
	},
);

// Test Id: 126b3de3b75053ad49d66743f0c8f274
hydrateText(
	"{firstName} {lastName}",
	// THROWS not assignable to parameter of type 'Record<"firstName" | "lastName", ValueType>'.
	{
		lastName: "Doe",
	},
);

// Test Id: ebd0a6612f82a8ed0031d9e059ef0615
hydrateText(
	"Active: {isActive}",
	// THROWS not assignable to parameter of type 'Record<"isActive", ValueType>'.
	{},
);

// Test Id: 03cb3b83ce958f1812469d094b6cdfae
hydrateText("Active: {isActive}", {
	// THROWS not assignable to parameter of type 'Record<"isActive", ValueType>'.
	IS_ACTIVE: true,
});

// Test Id: 0b3f978b784258a5f01b26fc805f9c6e
hydrateText("Active: {isActive}", {
	isActive: true,
	// THROWS not assignable to parameter of type 'Record<"isActive", ValueType>'.
	id: 42,
});

// Test Id: b857c06caab24cdc873168a7aff76206
hydrateText(
	"Seconds: {seconds}",
	// THROWS not assignable to parameter of type 'Record<"seconds", ValueType>'.
	{},
);

// Test Id: 8e59d5c4458f80f22cc1bb24502ffc99
hydrateText("Seconds: {seconds}", {
	// THROWS not assignable to parameter of type 'Record<"seconds", ValueType>'.
	SECONDS: 1_000_000,
});

// Test Id: d92b0750a9e4c02c76844b6744ee2573
hydrateText("Seconds: {seconds}", {
	seconds: 1_000_000,
	// THROWS not assignable to parameter of type 'Record<"seconds", ValueType>'.
	id: 42,
});

// Test Id: 306c99b7df15ec74284c55546c12a78f
hydrateText(
	"milliseconds: {milliseconds}",
	// THROWS not assignable to parameter of type 'Record<"milliseconds", ValueType>'.
	{},
);

// Test Id: 560e0c8cadd217f0ae283e385ae3c3af
hydrateText("milliseconds: {milliseconds}", {
	// THROWS not assignable to parameter of type 'Record<"milliseconds", ValueType>'.
	MILLISECONDS: BigInt(9007199254740991),
});

// Test Id: 6f33cc35f75acf0daf730f245d5feb1b
hydrateText("milliseconds: {milliseconds}", {
	milliseconds: BigInt(9007199254740991),
	// THROWS not assignable to parameter of type 'Record<"milliseconds", ValueType>'.
	id: 42,
});

// Test Id: 3c30106444675dad01d6e308ea5298e5
hydrateText(
	"Hello, {{username}}!",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
);

// Test Id: c8259b5a3f9405752fb2b709ed4fcbc9
hydrateText("Hello, {{username}}!", {
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	USER_NAME: "John",
});

// Test Id: 600317192a267b2cd4f60e4b75e6ef1e
hydrateText("Hello, {{username}}!", {
	username: "John",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	id: 42,
});

// Test Id: 48795b7f39073c2426d99a61682ae5e7
hydrateText(
	"Hello, {username}!",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
	{},
);

// Test Id: a914816d90fad99932117e5456a21aaf
hydrateText(
	"Hello, {username}!",
	{
		username: "John",
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"{", "}">'.
	{},
);

// Test Id: f950113749305f4c4de6fd839b3b1369
hydrateText(
	"Hello, undefinedusernameundefined!",
	{
		username: "John",
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"{", "}">'.
	{},
);

// Test Id: 57e4397507e57f28d1e35f53434bbf37
hydrateText(
	"Hello, {username}!",
	{
		username: "John",
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"{", "}">'.
	{
		prefix: "{",
	},
);

// Test Id: ad24b69c8825b9b8e1589b644b2a210f
hydrateText(
	"Hello, {usernameundefined!",
	{
		username: "John",
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"{", "}">'.
	{
		prefix: "{",
	},
);

// Test Id: 09850c180d83e1aad23c5c71759bf52a
hydrateText(
	"Hello, {username}!",
	{
		username: "John",
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"{", "}">'.
	{
		suffix: "}",
	},
);

// Test Id: f2c4500d7b81642533ff7937559d4c1d
hydrateText(
	"Hello, undefinedusername}!",
	{
		username: "John",
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"{", "}">'.
	{
		suffix: "}",
	},
);

// Test Id: 0f446ad7b42fc3094ab94e1941a60a7b
hydrateText(
	"Hello, {username}!",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
	{
		prefix: "{",
		suffix: "}",
	},
);

// Test Id: 8e5661fb387b52bd5735f01a74973d96
hydrateText(
	"Hello, {username}!",
	{
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		USER_NAME: "John",
	},
	{
		prefix: "{",
		suffix: "}",
	},
);

// Test Id: 5742652cc6a193a17e668bb472a4ff00
hydrateText(
	"Hello, {username}!",
	{
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		id: 42,
	},
	{
		prefix: "{",
		suffix: "}",
	},
);

// Test Id: 70c1cba604a5c4ea8eaffc5c732c963b
hydrateText(
	"Hello, {{username}}!",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
	{
		prefix: "{{",
		suffix: "}}",
	},
);

// Test Id: 6dc30b8715b383edc7da72be0f0c39bc
hydrateText(
	"Hello, {{username}}!",
	{
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		USER_NAME: "John",
	},
	{
		prefix: "{{",
		suffix: "}}",
	},
);

// Test Id: d1322ac7a747e94a5b2d1a6644261813
hydrateText(
	"Hello, {{username}}!",
	{
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		id: 42,
	},
	{
		prefix: "{{",
		suffix: "}}",
	},
);

// Test Id: 019d348956f4a1c679ac5412cd1abf60
hydrateText(
	"Hello, ${username}!",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
	{
		prefix: "${",
		suffix: "}",
	},
);

// Test Id: 2b54c91bd343d5dc6844dbeb24600b21
hydrateText(
	"Hello, ${username}!",
	{
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		USER_NAME: "John",
	},
	{
		prefix: "${",
		suffix: "}",
	},
);

// Test Id: fd6dd1e7a9bf66cf8f0033bf0070e175
hydrateText(
	"Hello, ${username}!",
	{
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		id: 42,
	},
	{
		prefix: "${",
		suffix: "}",
	},
);

// Test Id: 12a32a5b6289285455b978bccb3160ca
hydrateText(
	":firstName: :lastName:",
	// THROWS not assignable to parameter of type 'Record<"firstName" | "lastName", ValueType>'.
	{},
	{
		prefix: ":",
		suffix: ":",
	},
);

// Test Id: 8fbb51b6cb87f8efaccbf1efe4e40792
hydrateText(
	":firstName: :lastName:",
	// THROWS not assignable to parameter of type 'Record<"firstName" | "lastName", ValueType>'.
	{
		firstName: "John",
	},
	{
		prefix: ":",
		suffix: ":",
	},
);

// Test Id: e27328ae9324195ae0d56f654846f8df
hydrateText(
	":firstName: :lastName:",
	// THROWS not assignable to parameter of type 'Record<"firstName" | "lastName", ValueType>'.
	{
		lastName: "Doe",
	},
	{
		prefix: ":",
		suffix: ":",
	},
);

// Test Id: 93b1ffde814c82af41354cbb408fe758
hydrateText(
	":firstName: :lastName:",
	{
		firstName: "John",
		lastName: "Doe",
		// THROWS not assignable to parameter of type 'Record<"firstName" | "lastName", ValueType>'.
		id: 42,
	},
	{
		prefix: ":",
		suffix: ":",
	},
);

// Test Id: dca4da146c2a1a3151758d3a489cf625
hydrateText(
	"/user/:id",
	// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
	{},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: f24a61461b3a53a54c3f8be983a36e9b
hydrateText(
	"/user/:id",
	{
		// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
		ID: 42,
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 23d33d2b73409e7e0ad781c6fe9d2f0f
hydrateText(
	"/user/:id",
	{
		id: 42,
		// THROWS assignable to parameter of type 'Record<"id", ValueType>'.
		username: "John",
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 2fc2c3180c1d6d00f46b61de4da70490
hydrateText(
	"/user/:id:username",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 3cd3cb9b568dfc4278706a1b9a3569be
hydrateText(
	"/user/:id:username",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		id: 42,
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 77fe5fa145abed7db81f53a7bcfef672
hydrateText(
	"/user/:id:username",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		username: "John",
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: c2fc6a631abb5bc533ffa79ce8c424d3
hydrateText(
	"/user/:id:username",
	{
		id: 42,
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
		isActive: true,
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: f8c0e7dfd3c704d8d2cbf87ea79eb7f3
hydrateText(
	"username: - Software Engineer",
	// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
	{},
	{
		prefix: "",
		suffix: ":",
	},
);

// Test Id: 5d64c1ca0bd22edf1fbd4ee4082851aa
hydrateText(
	"username: - Software Engineer",
	{
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		USER_NAME: "John",
	},
	{
		prefix: "",
		suffix: ":",
	},
);

// Test Id: 2799c5011a9c8c8ce494f684c2363a62
hydrateText(
	"username: - Software Engineer",
	{
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username", ValueType>'.
		id: 42,
	},
	{
		prefix: "",
		suffix: ":",
	},
);

// Test Id: f15576c900a23aece67b8790f75d5c5b
hydrateText(
	"user",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	{},
	{
		prefix: "",
		suffix: "",
	},
);

// Test Id: b4395ed60e6df24fcaf8c64a73506564
hydrateText(
	"user",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	{
		u: "{U}",
	},
	{
		prefix: "",
		suffix: "",
	},
);

// Test Id: 5301902ac4bc03f4d189138ff78aa7dd
hydrateText(
	"user",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	{
		u: "{U}",
		s: "<S>",
	},
	{
		prefix: "",
		suffix: "",
	},
);

// Test Id: 629e103c775ff70bf24e4ce8d895dfc6
hydrateText(
	"user",
	{
		u: "{U}",
		s: "<S>",
		e: "(E)",
		r: "[R]",
		// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
		x: "-X-",
	},
	{
		prefix: "",
		suffix: "",
	},
);

// Test Id: 62f126044c723f6c33cf0b3e4b49cd1e
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 9e145f684808799c252a3b9dcc83b0a8
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		id: 42,
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 1d183b36f9bebd6611286603ac6ea03f
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		username: "John",
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: b4b07415edd487c532b4390271acba48
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	{
		id: 42,
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
		isActive: true,
	},
	{
		prefix: ":",
		suffix: "",
	},
);

// Test Id: 262e61bc664f60e8aeb5b3112da513a1
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	{
		id: 42,
		username: "John",
	},
	{
		prefix: ":",
		// THROWS Type '""' is not assignable to type '"/"'.
		suffix: "",
	},
);

// Test Id: bea0800f7db8cac5f8bc89cf890f8c98
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{},
	{
		prefix: ":",
		suffix: "",
	} as unknown as InterpolationOptions<":", "/">,
);

// Test Id: 210ad704a05d205283be9bd851ee9da8
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		id: 42,
	},
	{
		prefix: ":",
		suffix: "",
	} as unknown as InterpolationOptions<":", "/">,
);

// Test Id: b7e74a2db86e541d3dad8fdb361b73d5
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		username: "John",
	},
	{
		prefix: ":",
		suffix: "",
	} as unknown as InterpolationOptions<":", "/">,
);

// Test Id: cd001933ed729c3509d23b847c266c75
hydrateText<"/user/:id/:username/", ":", "/">(
	"/user/:id/:username/",
	{
		id: 42,
		username: "John",
		// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
		isActive: true,
	},
	{
		prefix: ":",
		suffix: "",
	} as unknown as InterpolationOptions<":", "/">,
);

const hydrateRoute = configureHydrateText({
	prefix: ":",
	suffix: "",
});

// Test Id: 318796ae08e53e90f10ed2d5dfa737f6
// THROWS Expected 1-3 arguments, but got 0.
hydrateRoute();

// Test Id: 4f4fd053c4fea88c9b5986fa6e78571c
hydrateRoute(
	"/user/:id",
	// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
	{},
);

// Test Id: bbd65218fd0703080e2709b24364df2b
hydrateRoute("/user/:id", {
	// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
	ID: 42,
});

// Test Id: 6cd689e4ed7bc823683d994ebb393757
hydrateRoute("/user/:id", {
	id: 42,
	// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
	username: "John",
});

// Test Id: e95f207e9eaa2b21feaff941f6cd7038
hydrateRoute(
	"/user/:id:username",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{},
);

// Test Id: ea721ecccc2112a68ad21d47d240777a
hydrateRoute(
	"/user/:id:username",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		username: "John",
	},
);

// Test Id: 38bb62fb4be465bc27a6bd5c0299bb52
hydrateRoute(
	"/user/:id:username",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	{
		id: 42,
	},
);

// Test Id: 8a1ca67b89dab1a7bdbd3a1cd1b0d1ed
hydrateRoute("/user/:id:username", {
	id: 42,
	username: "John",
	// THROWS not assignable to parameter of type 'Record<"username" | "id", ValueType>'.
	isActive: true,
});

// Test Id: 92b41b81af940608db31d005741a6c6c
hydrateRoute(
	"/user/(id)",
	// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
	{},
	{
		prefix: "(",
		suffix: ")",
	},
);

// Test Id: 823c18ebf1669a4d28a85355c563c3c3
hydrateRoute(
	"/user/(id)",
	{
		// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
		ID: 42,
	},
	{
		prefix: "(",
		suffix: ")",
	},
);

// Test Id: 5e49f161e48aa13c6360ca4cc3bf535d
hydrateRoute(
	"/user/(id)",
	{
		id: 42,
		// THROWS not assignable to parameter of type 'Record<"id", ValueType>'.
		username: "John",
	},
	{
		prefix: "(",
		suffix: ")",
	},
);

// Test Id: d7e87174c35b0a36b6edf7683372eccd
hydrateRoute(
	"/user/(id",
	{
		id: 42,
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<"(", "">'.
	{
		prefix: "(",
	},
);

// Test Id: dea3dc9c2eed148b9535cbdde3835a43
hydrateRoute(
	"/user/(idundefined",
	{
		// THROWS not assignable to parameter of type 'Record<"idundefined", ValueType>'.
		id: 42,
	},
	{
		prefix: "(",
	},
);

// Test Id: 0715c3ceaa37e39b9b2d9ebf4c5b6c76
hydrateRoute(
	"/user/:id)",
	{
		id: 42,
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<":", ")">'.
	{
		suffix: ")",
	},
);

// Test Id: 844652a9cccbb162634eedc03161bcae
hydrateRoute(
	"/user/undefinedid)",
	{
		id: 42,
	},
	// THROWS not assignable to parameter of type 'InterpolationOptions<":", ")">'.
	{
		suffix: ")",
	},
);

const replaceLetters = configureHydrateText({
	prefix: "",
	suffix: "",
});

// Test Id: bf02495a5023dea7a9f35e7849b2ba1c
replaceLetters(
	"user",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	{},
);

// Test Id: f4460942636b17ae0beaa197dc5cb8ab
replaceLetters(
	"user",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	{
		u: "{U}",
	},
);

// Test Id: e90c03a47d7cbc56fb2f5dd44bebe162
replaceLetters(
	"user",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	{
		u: "{U}",
		s: "<S>",
	},
);

// Test Id: 6001dba4f00a338fc6409af6788b0879
replaceLetters("user", {
	u: "{U}",
	s: "<S>",
	e: "(E)",
	r: "[R]",
	// THROWS not assignable to parameter of type 'Record<"u" | "s" | "e" | "r", ValueType>'.
	x: "-X-",
});

// THROWS Type instantiation is excessively deep and possibly infinite.
replaceLetters("some very, very long text", {});
