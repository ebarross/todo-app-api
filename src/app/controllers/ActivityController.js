const Activity = require("../models/Activity");

class ActivityController {
  async index(req, res) {
    const actitivies = await Activity.findAll({
      where: { user_id: req.user.id },
      attributes: ["id", "title", "description", "status"],
      order: [["created_at", "ASC"]]
    });

    return res.json(actitivies);
  }

  async find(req, res) {
    const activity = await Activity.findByPk(req.params.id);

    if (!activity || activity.user_id !== req.user.id)
      return res.status(404).json({ error: "Activity not found" });

    const { id, title, description, status } = activity;

    return res.json({
      id,
      title,
      description,
      status
    });
  }

  async store(req, res) {
    let activity = req.body;
    activity.user_id = req.user.id;

    activity = await Activity.create(activity);

    return res.json(activity);
  }
}

module.exports = new ActivityController();
