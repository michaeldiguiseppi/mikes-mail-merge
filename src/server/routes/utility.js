function buildBody (emailBody, options) {
    var replaceParams = emailBody.split('{first}').join(options.firstName)
    .split('{last}').join(options.lastName).split('{email}').join(options.emailAddress);
    return replaceParams;
};

function formatBody (emailBody) {
    emailBody = emailBody.replace(/(?:\r\n|\r|\n)/g, '<br><br>')
    return emailBody;
}


module.exports = {
    buildBody: buildBody,
    formatBody: formatBody
}