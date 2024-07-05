const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');
const fs = require('fs');
const PRIVATE_KEY = ''
const account = caver.klay.accounts.wallet.add(PRIVATE_KEY); 

function ticketToken(req, res) {
    const add = fs.readFileSync ('deployedAddress', 'utf8');
    const abi = JSON.parse(fs.readFileSync('deployedABI', 'utf8'));
 
    var stContract = new caver.klay.Contract(abi, add, 
        {from: account.address
         
    });
    
    var eventId = 3;
    var seatId = 3;    
   
   stContract.methods.mintTicket(eventId, seatId, account.address).send({
        from: account.address,               
        gas: '24000000',
        value: 0
    });
        
    res.redirect('ticket');

}

module.exports.ticketToken = ticketToken; 

