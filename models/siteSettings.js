const mongoose = require('mongoose');

const siteSettingsSchema = {
  cId: {
    type: String,
    required: true,
    default: process.env.FRONTENDSITENAME
  },
  requests: {
    type: Boolean,
    required: true,
    default: true,
  },
  adminRequests: {
    type: Boolean,
    required: true,
    default: true,
  }
}

const Settings = mongoose.model("Settings", siteSettingsSchema);

module.exports = Settings;
