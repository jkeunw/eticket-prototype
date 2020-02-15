const SmartTicket = artifacts.require('./SmartTicket.sol')
const fs = require('fs')

module.exports = function (deployer) {
  deployer.deploy(SmartTicket)
    .then(() => {
      if (SmartTicket._json) {
        fs.writeFile(
          'deployedABI',
          JSON.stringify(SmartTicket._json.abi),
          (err) => {
            if (err) throw err
            console.log("파일에 ABI 입력 성공");
          })
      }

      fs.writeFile(
        'deployedAddress',
        SmartTicket.address,
        (err) => {
          if (err) throw err
          console.log("파일에 주소 입력 성공");
        })
    })
}