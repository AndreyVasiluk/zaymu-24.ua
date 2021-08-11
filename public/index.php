<?php
if (strpos($_SERVER['REQUEST_URI'], 'successful-registration') !== false) {
    require_once '../public/kclient.php';
    $client = new KClient('http://194.58.100.146/api.php?', 'f9wkmtmdwql3l7tpbmddzynfpzxvm747');
    $client->sendAllParams();       // to send all params from page query
    $client->forceRedirectOffer();       // redirect to offer if an offer is chosen
// $client->param('sub_id_5', '123'); // you can send any params
// $client->keyword('PASTE_KEYWORD');  // send custom keyword
// $client->currentPageAsReferrer(); // to send current page URL as click referrer
// $client->disableSessions(); // to disable using session cookie (without this cookie restoreFromSession wouldn't work)
// $client->debug();              // to enable debug mode and show the errors
// $client->execute();             // request to api, show the output and continue
    $client->executeAndBreak();     // to stop page execution if there is redirect or some output

}
use App\Kernel;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return function (array $context) {
    return new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
};
