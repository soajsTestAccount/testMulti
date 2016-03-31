module.exports = {
	serviceName: "testDaemon",
	servicePort: 4900,
	type: 'daemon',
	serviceVersion: 1,
	prerequisites: {},
	"errors": {},
	"waitTimeInMin": 1 * 60,

	"schema": {
		"testJob": {
			"l": "test Job"
		}
	}
};