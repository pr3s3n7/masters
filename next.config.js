module.exports = {
  async generateBuildId() {
    return `${Date.now()}`;
  },
};