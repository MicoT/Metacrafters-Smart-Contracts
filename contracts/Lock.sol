// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MessageContract {
    string private message;

    event MessageUpdated(string newMessage);

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
        emit MessageUpdated(newMessage);
    }
}
