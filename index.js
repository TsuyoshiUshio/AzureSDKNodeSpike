const MsRest = require('ms-rest-azure');
const webSiteManagementClient = require('azure-arm-website');

MsRest.interactiveLogin((err, credentials) => {
    if (err) throw err;
    let subscriptionId = "YOUR_SUBSCRIPTION_HERE";
    var client = new webSiteManagementClient(credentials, subscriptionId);
    client.webApps.list(function(err, result) {
        if (err) return console.log(err);
        return console.log(result);
    });
    let resourceGroupName = "AzureFunctionSpike";
    let name = "YOUR_FUNCTION_APP_NAME_HERE";
    let options = null;
    let promise = client.webApps.getFunctionsAdminToken(resourceGroupName, name);
    promise.then((message) => {
        console.log(message);
    });

});