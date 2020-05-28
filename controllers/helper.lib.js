const moment = require('moment');
const methods = {
    isVal: value => ( value && value !== '' && value !== null && value !== undefined && value !== 0 ),
    now: () => moment().format( 'YYYY-MM-DD HH:mm:ss' )
};
module.exports = methods;