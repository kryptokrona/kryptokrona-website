---
slug: "/guides/run-a-node"
date: "2019-05-04"
title: "Run a public node"
category: "Guide"
color: "yellow"
author: "Knugen"
---

#### Have you ever considered what you can do for Kryptokronan?

Well, as you may know public nodes are vital to the network as they allow for people to sync their wallets and new nodes to sync the blockchain. This guide will provide you with the tools and knowledge to run a public node 24/7 for 365 days for free, in fact you will be earning some XKR in the process.
Intrigued? Well, read along as i detail the process below!
<br/>
<br/>
I made this work on osx Catalina but you could make this work on ubuntu or win10 aswell by installing a SSH client and connect to your AWS instance using that and start compiling..
If that is the case then skip step 3-6 and connect to your free aws instance through your preferred SSH client using the .pem file that your instance generates.
For windows perhaps use putty or the native tools, for ubuntu openSSH or putty.
<br/>
<br/>
This method requires registering a credit/debit card with AWS, they will charge 1 dollar to make sure your card isnt canceled but you will get that dollar back.
<br/>
<br/>
**Creating AWS ubuntu Instance and Connecting to it via SSH**
<br/>
<br/>
1. Start by creating a AWS free tier account: https://aws.amazon.com/?nc2=h_lg
2. Deploy an instance in US east Virginia, choose ubuntu server 18.04 LTS and then t2 micro instance.
3. Make sure to save the .pem file in your home folder.
4. Once it is ready, choose connect and copy the example line
5. Open a terminal and type sudo before pasting the line, then hit enter.
6. If your ssh connection is successful then your are ready to install the node software but before you do that..
7. Install a handy tool called screen which will allow you to navigate between terminal windows in your vm by typing sudo apt install screen and follow the prompts.
   (Quick guide on screen: https://bit.ly/38NPG6v)
8. Then install a handy tool for unzipping folders by typing sudo apt install unzip and hitting enter
9. now copy and paste:

<br/>
<br/>

```
screen

wget https://kryptokrona.se/Kryptokrona-linux.zip

unzip Kryptokrona-linux.zip

rm -rf Kryptokrona-linux.zip

cd Kryptokrona

./kryptokrona --add-exclusive-node 68.183.214.93:11897
```

Once fully synced open you can go ahead and close your node by hitting ctrl + c, now it is time to open port **11898**.
Head on over to your AWS management console and click on security groups under network & security.
Mark the first one of the security groups, click actions and then edit inbound rules.
Add a custom TCP rule specifying port **11898** and allow it anywhere and then save.
Repeat the process for outbound rules by clicking actions and edit outbound rules.
Now unmark the first security group and mark the second one and repeat the same process as above.
Then head back to your ssh terminal typ screen and hit enter and then start your node with:

```
./kryptokrona --enable-cors=* --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=11898
```

Let your node sync.. then press ctrl + a and ctrl + d in rapid succession to mimise the node terminal window.

Open a terminal on your local machine and check if your node is responding (replace 0.0.0.0 with your instance ip)

```
curl -d '{"jsonrpc":"2.0", "method":"getblockcount", "params":{}}' http://0.0.0.0:11898/json_rpc
```

If it answers with the current block count then your all good to start mining!
Head on back to the SSH terminal window and copy and paste these commands:

```
screen
./miner
```

Copy and paste your XKR adress into the terminal and hit enter.
you are now mining on your cloud server, hit ctrl + a and ctrl + d again to minimise the mining terminal window and type clear and hit enter after that.
Then verify your running processes by typing ps -a and hit enter, you should then be seeing kryptokrona and miner running as separate processes.
You can now go ahead and close the ssh terminal window.

Thats it, you are now running a public node within the XKR network and also chugging some hashes at about 100-700 h/s.
You can monitor your instance through AWS management console if you like but once you have set this up it will handle it self for the rest of the year.
Once your year is up AWS will actually allow you to create a new account using the same credit card as the previous year to repeat the process so thats pretty sweet.

Please consider submitting your public node ip to [ulviux@kryptokrona.se](mailto:ulviux@kryptokrona.se) so that we can append it to the list of public node.
