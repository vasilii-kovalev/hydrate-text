import { InterpolationOptions, configureHydrateText, hydrateText } from "..";

// Test Id: e3d1bd7920d571fae01eb16c3b8343ba
hydrateText("");

// Test Id: 18d6dbe5774751098a4a74c590ef53c0
hydrateText("Hello World!");

// Test Id: 4260b34d10b016b41c1b7509cbe699fd
hydrateText("Hello, {username}!");

// Test Id: 2af2fc130be13f625c9c5adafd808471
hydrateText("", {});

// Test Id: c4bb40eefc35e88d5779a86a99560386
hydrateText("Hello World!", {});

// Test Id: 42301541eb3fc4573221705d2113b799
hydrateText("Hello, {username}!", {
  username: "John",
});

// Test Id: 383c38f885d84ebd652223325669afd1
hydrateText("{firstName} {lastName}", {
  firstName: "John",
  lastName: "Doe",
});

// Test Id: 4fadf44d831fc988cf92fa78c54e8b5e
hydrateText("Active: {isActive}", {
  isActive: true,
});

// Test Id: b3178c3166956e50643e4267c312607e
hydrateText("Seconds: {seconds}", {
  seconds: 1_000_000,
});

// Test Id: 4e55ba820ff0a4c8e2a7c925e7693c2b
hydrateText("milliseconds: {milliseconds}", {
  milliseconds: BigInt(9007199254740991),
});

// Test Id: af9b1b362e6dee5ed69f10bb7e397c95
hydrateText("Hello, {{username}}!", {
  username: "John",
});

// Test Id: 18cd8d6e9f8325289789633dfe77000f
hydrateText(
  "Hello, {username}!",
  {
    username: "John",
  },
  {
    prefix: "{",
    suffix: "}",
  },
);

// Test Id: 01f2345edad7d94b6f753581a2b17a27
hydrateText(
  "Hello, {{username}}!",
  {
    username: "John",
  },
  {
    prefix: "{{",
    suffix: "}}",
  },
);

// Test Id: 4a43c157fab840b304b4748a07267f6b
hydrateText(
  "Hello, ${username}!",
  {
    username: "John",
  },
  {
    prefix: "${",
    suffix: "}",
  },
);

// Test Id: ab65a82ede035969c3b775a4c12c4532
hydrateText(
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

// Test Id: 92b4b1b542a73f57476f371932510d1a
hydrateText(
  "/user/:id",
  {
    id: 42,
  },
  {
    prefix: ":",
    suffix: "",
  },
);

// Test Id: c14763e95536731399382dee040a5602
hydrateText(
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

// Test Id: 7fa77b7792d13b8567c8e9a6c82195dd
hydrateText(
  "username: - Software Engineer",
  {
    username: "John",
  },
  {
    prefix: "",
    suffix: ":",
  },
);

// Test Id: 78a37c77100f73d67498ae4ff83ddf53
hydrateText(
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

// Test Id: 5eaa48bee5ae430cbab0ff3746c27a53
/*
  If we set `suffix` in the interpolation options (the 3d argument) as "/",
  this character will be replaced. In this case, it is necessary to re-define
  the function's types to get the correct variables names and use type assertion
  on interpolation options object to fix inconsistency error.
*/
hydrateText<"/user/:id/:username/", ":", "/">(
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

// Test Id: f73fa2573b43438a2ac9a52706e2604b
hydrateText("Hello World!" as string);

// Test Id: 707af50942d29b5c46fe7d0c0b381b3c
hydrateText("Hello World!" as string, {});

// Test Id: e37d01f00d8432804eeaa6add2cc7a9a
hydrateText("Hello World!" as string, {
  username: "John",
});

// Test Id: bf580c9c905ee5f255a28e6b850347f9
hydrateText("Hello, {username}!" as string, {
  username: "John",
});

const hydrateRoute = configureHydrateText({
  prefix: ":",
  suffix: "",
});

// Test Id: cdcdac2c1b868bc728472cd6cbba271f
hydrateRoute("");

// Test Id: d666a945c62ffbb4dfbefa886e1f9b7d
hydrateRoute("Hello World!");

// Test Id: 176fa7cbde3554852920b8117ffd06ec
hydrateRoute("Hello, {username}!");

// Test Id: df846302df158f3abb4a2cdb8ab14af9
hydrateRoute("", {});

// Test Id: 6e3983ff1c1769fc3fce68ad636ed0e1
hydrateRoute("Hello World!", {});

// Test Id: 387e00c55433a77cb30054261f8dbd70
hydrateRoute("/user/:id");

// Test Id: e39e3bddb6906f26f5e28be34a529d50
hydrateRoute("/user/:id", {
  id: 42,
});

// Test Id: 4fc02ff80bd4bb296c9a06506040314a
hydrateRoute(
  "/user/(id)",
  {
    id: 42,
  },
  {
    prefix: "(",
    suffix: ")",
  },
);

const replaceLetters = configureHydrateText({
  prefix: "",
  suffix: "",
});

// Test Id: a50d6c6a7ee526b764bfd112c69ec773
replaceLetters("user", {
  u: "{U}",
  s: "<S>",
  e: "(E)",
  r: "[R]",
});

// Test Id: 848097af194354e7e59c3a06a33f8844
replaceLetters("some very, very long text");
