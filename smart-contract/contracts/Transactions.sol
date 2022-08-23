// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;



contract Transactions{

    struct user{
        address userAddress;
        address[] recipients;
        uint[] myInvesments;
        uint[] invesmentsToMe;
        //uint userNumber;
        uint funds;
        bool activeUser;
    }

    struct invesment{
        address  invester;
        address  receiver;
        uint amount;
        uint timeOfInvesment;   //In terms of seconds
        uint timeForRelease;    //Timestamp of the block
        bool isReversable;      //Unused
        bool isActive;          
        uint invesmentNo;

    }
    invesment[] invesments;     // ?? Can be improved using maps


    //invesment[] invesments; için bir getter method.
    function getAllinvesments() public view returns (invesment[] memory) {
        return invesments;
    }

    //invesment ekleme testi
    event InvesmentiEkle(address from, address receiver, uint amount, uint256  timeOfInvesment, uint256  timeForRelease, bool isactive,bool test , uint transactionCount);

        //investment ekleme için test
       function addToBlockchain(address payable receiver, uint amount, uint timeForRelease) public {
        transactionCount += 1;
        invesments.push(invesment(msg.sender, receiver, amount,  block.timestamp, timeForRelease, false,true,transactionCount));

        emit InvesmentiEkle(msg.sender, receiver, amount,  block.timestamp, timeForRelease, false,true,transactionCount);
    
    }



      
  
    

    //react icin lazım
    uint256 transactionCount;
    
    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }


    
    address[] userAddresses;
    mapping(address => user) userMapping;

    event newRegister(uint userNo);     //Solidity can only use return in its own code
    //We need events to communicate with front-end

    //Solidity does not suppor default arguments
    //Overloaded functions caused problems in testing, so I commented them out


    function register(address userAddress) public{
        //add a new user to "users" array

        require(!userMapping[userAddress].activeUser, "You are already registered!");
        /*
        for(uint i = 0; i < users.length; i++){
            require(users[i].userAddress != userAddress, "You are already registered!");
        }
        */


        address[] memory recipients;                    //!! Not sure about using "memory" keyword on this block
        uint[] memory myInvesment;
        uint[] memory invesmentsToMe;
        //uint userNumber = users.length + 1;
        uint funds = 0;
        user memory newUser = user(userAddress, recipients, myInvesment, invesmentsToMe, funds, true);
        userMapping[userAddress] = newUser;
        userAddresses.push(userAddress);
        //users.push(newUser);
    }



    function registerReceiver(address receiver) public {
        //add user to "recipients" array
        //if the address is not a user in the contract, add the address using the "register" function
        if(userMapping[receiver].activeUser){
            userMapping[msg.sender].recipients.push(receiver);
        }
        else{
            register(receiver);
            userMapping[msg.sender].recipients.push(receiver);
        }
        /*
        for(uint i = 0; i < users.length; i++){         //We iterate through users to find if they 
            if(users[i].userAddress == receiver){
                users[userNumber].recipients.push(i); //add the user number of the recipient to the msg.sender's "recipients" array
                userNo = userNumber;
                return userNo;
            }
        }
        userNo = register(receiver);        //If this address is nor registered, we register it
        return userNo;
        */
    }

    function divideToRecipients(uint timeForRelease) public {
        //divide all the eth to recipients as invesments

        //for now it divides equally

        require(userMapping[msg.sender].funds != 0, "You have no funds to divide.");
        require(userMapping[msg.sender].recipients.length != 0, "You have no recipients to invest to.");

        //for now it divides equally
        uint invesmentAmount = userMapping[msg.sender].funds / userMapping[msg.sender].recipients.length;

        for(uint i = 0; i < userMapping[msg.sender].recipients.length; i++){  //Loop through all the registered recipients
            address recipientAddress = userMapping[msg.sender].recipients[i];
            uint invesmentNo = invesments.length + 1;
            invesments.push(invesment(msg.sender, recipientAddress, invesmentAmount, block.timestamp, timeForRelease, true, true, invesmentNo)); //add a new invesment for every recipient
            userMapping[msg.sender].myInvesments.push(invesmentNo);        //add this invesment to the users' arrays
            userMapping[recipientAddress].invesmentsToMe.push(invesmentNo);
        }
    }

    event RegisteredUser(address userAddress);

    function getRecipients() public{
        require(userMapping[msg.sender].recipients.length > 0, "No recipient registered");
        for(uint i = 0; i < userMapping[msg.sender].recipients.length; i++){
            address recipientAddress = userMapping[msg.sender].recipients[i];
            emit RegisteredUser(recipientAddress);
        }
    }

    event InvesmentInfo(address  invester, address  receiver, uint amount,  uint timeOfInvesment, uint timeForRelease, uint invesmentNo);

    function invesmentsMadeToMe() public {
        //return the sum of the invesments from "invesmentsToMe" array
        require(userMapping[msg.sender].invesmentsToMe.length > 0, "There are no invesments made for you");
        bool allInactive = true;                                                                                    //used this variable to check if the listed invesments active or not
        for(uint i = 0; i < userMapping[msg.sender].invesmentsToMe.length; i++){
            uint invesmentNo = userMapping[msg.sender].invesmentsToMe[i];
            if(invesments[invesmentNo].isActive){
                emit InvesmentInfo(invesments[invesmentNo].invester,invesments[invesmentNo].receiver , invesments[invesmentNo].amount, invesments[invesmentNo].timeOfInvesment,  invesments[invesmentNo].timeForRelease, invesments[invesmentNo].invesmentNo);
                allInactive = false;
            }
        }
        require(!allInactive, "There are no invesments made for you");
    }

      function myInvesments() view public returns( invesment[] memory ) {
        invesment[] memory returnMyInvesments = new invesment[](userMapping[msg.sender].myInvesments.length);
        for(uint i = 0; i < userMapping[msg.sender].myInvesments.length; i++){
            uint invesmentNo = userMapping[msg.sender].myInvesments[i];
            returnMyInvesments[i] = invesments[invesmentNo];
        }
        return returnMyInvesments;
    }
  
    function reverseInvesment(uint invesmentNo) payable public {
        //cancel an invesment
        require(invesments[invesmentNo].invester == msg.sender, "You are not the investor, only investors can cancel an invesment.");
        require(invesments[invesmentNo].isActive == true, "You can not cancel an inactive invesment.");

        invesments[invesmentNo].isActive = false;
        userMapping[msg.sender].funds = userMapping[msg.sender].funds + invesments[invesmentNo].amount;
    }
 
       function makeInvesment(address  receiver, uint timeForRelease, uint amount) payable public {
        uint invesmentNo = invesments.length;
        userMapping[msg.sender].myInvesments.push(invesmentNo);
        userMapping[receiver].invesmentsToMe.push(invesmentNo);
        emit InvesmentInfo(msg.sender,receiver,amount,block.timestamp,timeForRelease,invesmentNo);
        invesments.push(invesment(msg.sender, receiver, amount , block.timestamp, timeForRelease, true, true, invesmentNo));
        
    }

    function withdrawInvesment(uint invesmentNo) payable public {
        require(invesments[invesmentNo].receiver == msg.sender, "This invesment is not for this address!");
        require(invesments[invesmentNo].isActive, "You can not withdraw from an inactive invesment.");
        require((invesments[invesmentNo].timeOfInvesment + invesments[invesmentNo].timeForRelease) <  block.timestamp, "You can not withdraw the funds yet!");
        invesments[invesmentNo].isActive = false;
        payable(msg.sender).transfer(invesments[invesmentNo].amount);
    }
    
    function reviseInvesment(uint invesmentNo, uint amount, uint timeForRelease) public {
        require(invesments[invesmentNo].invester == msg.sender, "You can not revise an invesment you did not make.");
        require(invesments[invesmentNo].isActive, "This is an inactive invesment.");
        require(invesments[invesmentNo].timeOfInvesment + timeForRelease >= block.timestamp, "You can not set an invesment to be relased in a past date.");
        if(amount > invesments[invesmentNo].amount){
            require(userMapping[msg.sender].funds >= (amount - invesments[invesmentNo].amount), "Insufficent funds to revise invesment.");
            userMapping[msg.sender].funds =  userMapping[msg.sender].funds - (invesments[invesmentNo].amount - amount);
            invesments[invesmentNo].amount = amount;
        }
        else{
             userMapping[msg.sender].funds = userMapping[msg.sender].funds + (invesments[invesmentNo].amount - amount);
            invesments[invesmentNo].amount = amount;
        }
        invesments[invesmentNo].timeForRelease = timeForRelease;
    }
}