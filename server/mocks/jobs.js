
module.exports = function(app) {
  app.get('/api/v1/jobs', function(req, res) {
    res.send([
      {
        "id": 2,
        "name": "99",
        "type": "DockerJob",
        "image": "always_pass",
        "last_result": "Passed",
        "environment": null,
        "enabled": true,
        "interval": {
          "id": 2,
          "every": 15,
          "period": "seconds"
        },
        "queue": "SITE_1"
      },
      {
        "id": 3,
        "name": "916",
        "type": "DockerJob",
        "image": "always_pass",
        "last_result": "Passed",
        "environment": null,
        "enabled": true,
        "interval": {
          "id": 2,
          "every": 15,
          "period": "seconds"
        },
        "queue": "SITE_1"
      },
      {
        "id": 4,
        "name": "new-plugin-ping-test",
        "type": "DockerJob",
        "image": "kecorbin/collins-ping",
        "latest": null,
        "last_result": "Fail",
        "environment": {
          "id": 1,
          "name": "testing",
          "description": "fdsf",
          "json": {
            "TARGET": "192.168.10.254"
          }
        },
        "enabled": true,
        "interval": {
          "id": 2,
          "every": 15,
          "period": "seconds"
        },
        "queue": "SITE_1"
      }
    ]);
  });
};
