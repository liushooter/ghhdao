module.exports = {
  responses: {
    privateAttributes: ["_v", "id", "createdAt", "updatedAt"],
  },
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
};
