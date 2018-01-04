const Nightmare = require("Nightmare");

const nightmare = Nightmare({ show: true });

nightmare
    .goto('http://china.worldwideshop.ru/pl/user/user/index?uc%5Bsegment_id%5D=31415&uc%5Brule_string%5D=')
    .wait('input.form-control.form-field-email')
    .type('input.form-control.form-field-email', '')
    .type('input.form-control.form-field-password', '')
    .click('.btn-success')
    .wait('.gc-user-link')
    .click('.gc-user-link:nth-child(1) a')
    .wait('span.glyphicon.glyphicon-flash')
    .click('span.glyphicon.glyphicon-flash')
    .click('span.glyphicon.glyphicon-remove')
    .wait(2000)
    .click('.btn.btn-danger')
    .then(start())

function start() {

    nightmare
        .wait('.gc-user-link')
        .click('.gc-user-link:nth-child(1) a')
        .wait('span.glyphicon.glyphicon-flash')
        .click('span.glyphicon.glyphicon-flash')
        .click('span.glyphicon.glyphicon-remove')
        .wait(2000)
        .click('.btn.btn-danger')
        .then(console.log('rm user'))

    setTimeout(() => {
        start()
    }, 10000)
}
