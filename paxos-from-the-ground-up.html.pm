
#lang pollen

◊div[#:id "presentation-header"]{
  Paxos from the ground up
}

◊div[#:id "slide-container"]{

◊div[#:class "slide-section" #:title "Introduction"]{

  ◊slide{
    ◊div{◊img[#:src "images/paxos-symbol-2.png"]{}}
    ◊div[#:class "first-slide-title"]{Paxos from the ground up}
◊smaller-slide-text{Immad Naseer ◊span[#:style "padding-left: 5px"]{
◊a[#:href "https://www.linkedin.com/in/immad-naseer-b0235014/"]{◊img[#:src "images/linkedin.svg" #:width "12px"]} ◊a[#:href "https://twitter.com/immadnaseer"]{◊img[#:src "images/twitter.svg" #:width "12px"] }}}
  }

  ◊slide{
    Paxos is an algorithm to reach distributed consensus
  }

  ◊slide{
    So what is distributed consensus?

    It is the process of having a set of machines agree upon a common value
  }

  ◊slide{
     Why is distributed consensus an important problem?

     If we can get all machines to agree upon some value in a consistent manner, we get resiliency in the face of temporary machine failures and thus higher availability of the system
   }

   ◊slide{
     Why is distributed consensus a challenging problem?

     The machines have to agree upon a common value while communicating with each other over an unreliable network; furthermore the system should be able to gracefully handle the failure of a few machines
  }

   ◊slide{
     Instead of describing the Paxos protocol in all its subtle details from the get-go, we'll derive it starting with the simplest protocol and incrementally refining it till we reach the complete protocol
   }
}

◊div[#:class "slide-section" #:title "Set up of the example"]{

  ◊slide{
    Before we begin, let's carefully study the assumptions the protocol makes and the environment it executes in
  }

  ◊slide{
    What do we mean by an unreliable network?

    A message sent to a machine may never reach it
    A message sent later might arrive before a message sent earlier
    A message may be delivered more than once
  }

  ◊slide{
	  Are there other factors we should consider?

	  Machines can be malicious and can try to intentionally mislead the system so it doesn’t achieve consensus
	  (this is called Byzantine fault tolerance in the literature)

	  Paxos assumes that this is NOT the case
  }

  ◊slide{
  	How many machines are we trying to reach consensus between?

  	On the order of 5 - 9 machines
  }

  ◊slide{
    Now that we know some background and assumptions, let’s try and come up with the protocol
  }

  ◊slide{
  	We’ll assume three classes of machines as we derive the protocol

  	Proposers
  	Acceptors
  	Learners
  }

  ◊slide{
  	Proposers are responsible proposing values to the acceptors

  	Clients contact one of the proposers if they want the system to choose a certain value and the proposers in turn try to get that value accepted ◊smaller-slide-text{◊i{(we'll not be talking about clients from here on out for simplicity and assume the proposers are trying to get a value suggested by a client accepted by the system)}}

  	It’s a good idea to have more than one proposer as the system won’t be functional if there was only one and it crashed and was down for a while

  	Let’s pick two as we derive the protocol
  }

  ◊slide{
  	Acceptors are responsible for accepting (or rejecting) proposals from proposers while ensuring that the complete set of acceptors doesn’t accept conflicting values

  	It’s good to have more than one acceptor as the system won’t be functional if there was only one and it crashed and was down for a while

  	Let’s pick two as we derive the protocol
  }

  ◊slide{
  	Learners learn what the set of acceptors have chosen as a whole

  	Let’s pick just one learner as we derive the protocol for simplicity
  }

  ◊slide{
  	Let’s only deal with the unreliable network at first as we come up with the protocol and assume that no machine can go down

  	We’ll extend this simpler algorithm to handle machine failures later
  }
      
}

◊div[#:class "slide-section" #:title "Protocol for when no machine goes down"]{

  ◊slide{
  	What’s the simplest algorithm we can think of?

  	How about each proposer sends an ◊i{“accept”} message to all acceptors and each acceptor accepts the first message it receives?

  	What can possibly go wrong? ;)
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-1"]{}
    }
  }

  ◊slide{
  	What went wrong?

  	Both the proposers sent the ◊i{accept} messages at about the same time and since we couldn’t guarantee that the ◊i{accept} message for any one proposer will reach all acceptors before the other, chaos ensued
  }

  ◊slide{
  	How can we fix this?

  	One option is for a proposer to first send a ◊i{promise} message to all acceptors and make them promise that they won’t accept any other acceptors ◊i{accept} message before it sends its ◊i{accept} message

  	This may work
  }

  ◊slide{
  	How will the proposer identify itself in its promise message?

  	We can use the IP address of the proposer

  	Or better yet, we can identify the “proposal” instead of the proposer thus allowing a proposer to send multiple proposals

  	This gives us more flexibility and isn’t any more complicated so let’s go with this approach
  }

  ◊slide{
  	Each proposal can be identified by a pair ◊i{[sequence number, proposer name]}

  	So the first proposal sent by p1 can be ◊i{[1, p1]}
  	If p1 ever decides to send a second proposal, that can be named ◊i{[2, p1]} etc
  	etc
  }

  ◊slide{
    Let’s run this algorithm
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-accept-first-promise"]{}
    }
  }

  ◊slide{
  	So we bumped into a similar problem as before

  	The ◊i{promise} messages reached the acceptors in an inconvenient order just like the ◊i{accept} messages had reached earlier

  	This was actually quite predictable and we should have seen this coming
  }

  ◊slide{
  	Since acceptors might receive ◊i{promise} messages from multiple proposers, they will need to order them somehow so they accept one or the other but not both

  	We can achieve this by defining the “greater than” operator on proposal numbers; an acceptor only promises to accept a proposal if its proposal number is the highest one it has seen

    [2, p1] > [1, p1] ◊smaller-slide-text{◊i{(the sequence number of first is greater, proposer name doesn’t matter)}}
  	[1, p2] > [1, p1] ◊smaller-slide-text{◊i{(if the sequence numbers are same, we break the tie using proposer name)}}
    etc
  }

  ◊slide{
  	Let’s run this refined algorithm where a proposer first gets its ◊i{promise(proposal-number)} message acknowledged by all acceptors and only then sends its ◊i{accept} message

  	An acceptor only promises a proposal if it has the highest proposal number it has yet seen
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-accept-highest-promise"]{}
    }
  }

  ◊slide{
  	Good

  	We got a successful run
  }

  ◊slide{
  	There is still a problem lurking here

  	Can you think of it?
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-3"]{}
    }
  }

  ◊slide{
  	Let’s take a pause

  	Things are starting to get interesting and the state can evolve in multiple ways here
  }

  ◊slide{
  	Alternative #1 

  	p1’s ◊i{accept} message can reach both acceptors before p2’s ◊i{promise} message reaches either
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-3-alternative-1"]{}
    }
  }

  ◊slide{
  	Alternative #2

  	p2’s ◊i{promise} message can reach both acceptors before p1’s ◊i{accept} message reaches either
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-3-alternative-2"]{}
    }
  }

  ◊slide{
  	Alternative #3
  	This is the most interesting alternative

  	p1’s ◊i{accept} message reaches one acceptor while p2’s ◊i{promise} message reaches the other
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-3-alternative-3"]{}
    }
  }

  ◊slide{
    Hm, how do we break out of this one?
  }

  ◊slide{
    So far the proposers have been competing to get their values chosen. 

    What if they co-operated instead of competing?

    After all, the purpose of the protocol is to get "some" value chosen and not necessarily "my" value chosen
  }

  ◊slide{
    What if p2 changed its mind and tried to get blue accepted instead of green if it learned that some acceptor has already accepted blue?

    Will this work?
 
    Will this work in all situations?
  }

  ◊slide{
    Let's think about it
  }

  ◊slide{
    There are three logical alternatives

    p1's accept message reaches all acceptors before p2's promise reaches any 
    ◊smaller-slide-text{◊i{(we are good in this case)}}

    p2's promise message reaches all acceptors before p1's accept reaches any 
    ◊smaller-slide-text{◊i{(we are good in this case)}}

    p1's accept reaches some acceptors while p2's promise message reaches others 
    ◊smaller-slide-text{◊i{(let's think this through)}}
  }


  ◊slide{
    If p1's ◊i{acccept} message reaches some acceptor, even if just ◊i{one} acceptor, we know that p2 is bound to learn about it as it sends the ◊i{promise} message to all acceptors

    Thus p2 is bound to change its mind as long as even a single acceptor has already accepted a value
  }

  ◊slide{
    Once a value has been accepted by some acceptor (even if just one), the other proposers with a higher number proposal number ◊i{have} to get that value chosen instead of whichever value they had in mind earlier
  }

  ◊slide{
  	Let’s see this in action
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-4"]{}
    }
  }

  ◊slide{
    This worked!

    We cheated. 

    Just a little.
  }

  ◊slide{
    We had earlier said that a1 could never accept another message once it had already accepted some value
  }

  ◊slide{
    But a1 ◊i{did} accept the higher numbered blue value sent by p2

    What if p2 had sent green instead? 

    a1 had no choice but to accept that as well
  }

  ◊slide{
    So why all this emphasis on co-operation instead of competition?
  }

  ◊slide{
    If p2 hadn't changed its mind to try and get blue accepted instead of green, there is no guarantee that yet another proposer (say, p3) could later come along and get its even higher numbered orange value accepted instead

    This cycle would never end
  }

  ◊slide{
    p2 changing its mind was thus critical for the correctness of the protocol

    Acceptors can still accept a new value after having already accepted some value but the proposers make sure the new value they ask them to accept is the same as the old one (just with a different and higher numbered proposal)
  }

  ◊slide{
  	Congratulations!

  	We have derived the Paxos protocol assuming no machine goes down
  }
    
}

◊div[#:class "slide-section" #:title "Protocol for when machines can go down"]{

  ◊slide{
  	Machines do go down however

  	And what’s the point of a distributed consensus if we can’t tolerate machine failures?
  }

  ◊slide{
  	The immediate next question is: 

  	How many machine failures can we tolerate?
  }

  ◊slide{
  	Intuitively, we should be able to function fine as long as the majority of the machines are up

  	What’s the smallest majority? 51%
  }

  ◊slide{
  	As long as 51% of the machines are up, the protocol should be able to make forward progress

  	The machines which crashed can later come up and should be able to participate again without affecting the correctness of the protocol
  }

  ◊slide{
  	If we want to tolerate ◊i{f} failures, we should have 2f+1 machine failures (always an odd number)
  	3 machines tolerate 1 failure ◊smaller-slide-text{◊i{(as smallest majority is 2)}}
  	5 machines tolerate 2 failures ◊smaller-slide-text{◊i{(as smallest majority is 3)}}

  	2f+2 machines can still only tolerate ◊i{f} number of failures so having an even number of machines wastes an extra machine
  	4 machines still tolerate 1 failure ◊smaller-slide-text{◊i{(as smallest majority is 3)}}
  	6 machines still tolerate 2 failures ◊smaller-slide-text{◊i{(as smallest majority is 4)}}
  }

  ◊slide{
    Before we move forward, it’s useful to recognize a simple but important property of majorities
  }

  ◊slide{
  	Any two majorities always have at least one node in common

  	Let’s consider three acceptors a1, a2, a3 - there are three possible smallest majorities

  	a1, a2
  	a2, a3
  	a1, a3
  	◊smaller-slide-text{◊i{(Pick any two of the above - they always have a machine in common)}}
  }

  ◊slide{
  	Let’s derive the protocol for when some machines can go down

  	Let’s consider two proposers as before (p1 and p2) but five acceptors (a1 - a5) and one learner as before

  	We’ll work towards tolerating the failure of at most two acceptors
  }

  ◊slide{
    To warm up, let’s do a run where only one proposer proposes and two acceptors go down in the middle
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-5"]{}
    }
  }

  ◊slide{
    The protocol worked much the same way as before with the difference that the proposer waited to hear back from only a majority of acceptors instead of all acceptors
  }

  ◊slide{
    Since a proposer doesn’t have to wait to hear back from all acceptors, we can have race conditions where the two proposers are talking with a mostly disjoint set of acceptors
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-6"]{}
    }
  }

  ◊slide{
  	Since both the proposers have to talk to the smallest majority, they must talk to at least one common node (p3 in our example)

  	There are two ways the situation can evolve
  }

  ◊slide{
  	Alternative # 1

  	a3 receives p1’s ◊i{promise} message, acks it and then receives p2’s ◊i{promise} message leading it to discard a1’s subsequent ◊i{accept} message
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-6-5"]{}
    }
  }

  ◊slide{
  	Alternative # 2

  	a3 can receive p1’s ◊i{promise} message, ack it and receive p1’s ◊i{accept} message all before it receives p2’s ◊i{promise} message

  	We have seen this play out before - p2 will cooperate in this case and change its mind about which color to get chosen
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-7"]{}
    }
  }

  ◊slide{
  	This shouldn’t have been surprising

  	Turns out the rules we derived for the case when no machine goes down work pretty well in general assuming we wait to hear back from at least a majority of acceptors
  }

  ◊slide{
  	Since a proposer doesn’t have to contact every acceptor, it’s possible that it can hear back from multiple acceptors each of which has accepted a different value

  	In this case, it changes its mind and tries to get the accepted value with the highest proposal-number accepted by the majority
  }

  ◊slide{
    ◊scenario{
      ◊div[#:id "scenario-8"]{}
    }
  }

  ◊slide{
    We saw that a proposer can get acks with multiple accepted values if it only waits to hear back from majority

    It changes its mind and gets the highest numbered value accepted from among the set of values it receives
  }

  ◊slide{
  	This is it

  	This is the complete Paxos protocol for choosing a single value among a set of machines while tolerating f machine failures
  }

  ◊slide{
    Here is the detailed protocol each of the three types of nodes follows
  }

  ◊slide{
    ◊div[#:class "algorithm-node-section"]{
      ◊div[#:class "algorithm-node-title"]{Proposer}
      ◊div[#:class "algorithm-node-detail"]{
        Choose a globally unique proposal number and send promise(proposal-number) messages to all acceptors.

        Wait to hear an acknowledgement from smallest majority.

        If none of the received acknowledgements contain an already accepted value, feel free to send accept messages with the value of your choice.

        If any of the received acknowledgements contain an already accepted value, pick the one with the higher proposal number and get that accepted instead of your own value.
       }
    }
  }

  ◊slide{
    ◊div[#:class "algorithm-node-section"]{
      ◊div[#:class "algorithm-node-title"]{Acceptor}
      ◊div[#:class "algorithm-node-detail"]{
        When you receive a promise message, always acknowledge it if has the highest proposal number which you have seen; if the proposal number is lower than the one you had earlier acknowledged, feel free to not respond or send a negative acknowledgement

        Acknowledge it even if you have already accepted another value but include your accepted value and its corresponding proposal number in your acknowledgement

        When you receive an accept message, accept it if you had earlier acknowledged its proposal number which came through the promise message; also notify all the learners that you just accepted a value along with its proposal number
      }
    }
  }

  ◊slide{
    ◊div[#:class "algorithm-node-section"]{
      ◊div[#:class "algorithm-node-title"]{Learner}
      ◊div[#:class "algorithm-node-detail"]{
        When you recieve a message from an acceptor informing you they accepted a value (along with its proposal number), remember it.

        When you have received messages for the same proposal number from the smallest majority, you know the value the Paxos protocol chose.
      }
    }
  }
    
}

◊div[#:class "slide-section" #:title "Collapsing multiple roles into a machine"]{

  ◊slide{
    Typical implementations of Paxos collapse the multiple roles into a single machine
  }

  ◊slide{
  	There is typically only one proposer as it’s counter-productive to have more than one proposer proposing in a race

  	The distinguished proposer (aka leader) can be chosen from the set of machines using Paxos itself (think of the “value” being chosen as who will be the leader)

    The leader also serves as the distinguished learner and conveys the values it learns to other nodes instead of all of them learning by receiving ◊i{accepted} messages
  }

  ◊slide{
    Let’s see an exchange of messages in such a system where node n1 is the distinguished proposer and learner and n1, n2 and n3 are acceptors
  }

  ◊slide{
    ◊scenario{
       ◊div[#:id "scenario-9"]{}
    }
  }
     
}

◊div[#:class "slide-section" #:title "Multi-Paxos and Replicated State Machines"]{

  ◊slide{
    We have seen how Paxos can be used to choose a single value (but only a single value) in a consistent manner

  	In any real system, we will want to choose many different values
  }

  ◊slide{
    Before moving forward, let's take a step back and talk about replicated state machines

    We'll then see how we can use Paxos (or more precisely, Multi-Paxos) to implement a replicated state machine
  }

  ◊slide{
    A state machine is a computer which takes a sequence of commands and transitions into new a state as it executes each command
  }

  ◊slide{
    A replicated state machine is that same state machine but replicated across multiple computers for better fault tolerance and higher availability

    This allows us to view a collection of machines as one logical machine which has a higher uptime than any of them combined
  }

  ◊slide{
    Each command is now executed on each replica of the state machine instead of at just one computer

    ◊smaller-slide-text{As an important side note, command execution should be deterministic as a given command is executed multiple times, once for each replica}
  }

  ◊slide{
    Each machine maintains a list of input commands and the system runs an instance of Paxos in order to choose which command to execute for position ◊i{i}

    Since we run multiple instances of Paxos, one for each slot of the command list, this technique is called Multi-Paxos
  }

  ◊slide{
    To make things concrete, let's consider a system with three nodes (which we know can tolerate a single machine failure) which has accepted and run two commands

    ◊multi-paxos-example{
      n1: [ c1, c2 ]
      n2: [ c1, c2 ]
      n3: [ c1, c2 ]
    }

   Each node has learned through two rounds of Paxos that the command for 1st position is c1 and 2nd position is c2
  }

  ◊slide{
    When a client wants to execute a new command (c3), it contacts the distinguished proposer (aka leader) which in turn starts a round of Paxos to get the value for the 3rd position in the list chosen

    Each machine executes the command c3 as it accepts and learns that the system has chosen it as the value for the 3rd position in the list
	◊multi-paxos-example{
	   n1: [ c1, c2, c3 ]
	   n2: [ c1, c2, c3 ]
	   n3: [ c1, c2, c3 ]
	}    
  }

  ◊slide{
    Now assume the client issues c4, two nodes accept and learn it (while third node hasn't yet received all the messages)

	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4 ]
	   n2: [ c1, c2, c3, c4 ]
	   n3: [ c1, c2, c3 ]
	}

    The system can move ahead as it can tolerate the failure (or slow down) of a single node
  }
  ◊slide{
    The client can then issue command c5 and this command can reach all the nodes (including n3)

	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4, c5 ]
	   n2: [ c1, c2, c3, c4, c5 ]
	   n3: [ c1, c2, c3, ??,  c5 ]
	}

    n1 and n2 are free to execute c5 but n3 will have to wait to hear the value for the 4th slot before it's able to execute c5
  }
  ◊slide{
    Since n3 knows c5 has been chosen, it knows the value for the 4th slot must have been chosen by the majority
  
	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4, c5 ]
	   n2: [ c1, c2, c3, c4, c5 ]
	   n3: [ c1, c2, c3, ??,  c5 ]
	}

    If the network dropped messages to n3, it can always start a dummy proposal round for the 4th slot and one of the nodes in the majority which accepted will reply back with the command it accepted for that slot
  }
  ◊slide{
    Once n3 learns the value for the 4th slot, it can execute both c4 and c5

	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4, c5 ]
	   n2: [ c1, c2, c3, c4, c5 ]
	   n3: [ c1, c2, c3, c4,  c5 ]
	}
  }
  ◊slide{
    Let's assume n3 gets unlucky and crashes while n1 and n2 continue to make progress

	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4, c5, c6, c7, c8 ]
	   n2: [ c1, c2, c3, c4, c5, c6, c7, c8 ]
	   n3: [ c1, c2, c3, c4, c5 ]
	}
  }
  ◊slide{
    When n3 comes back up, it suddenly learns the value for the 9th slot and realizes it missed all the updates in between

	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4, c5, c6, c7, c8, c9 ]
	   n2: [ c1, c2, c3, c4, c5, c6, c7, c8, c9 ]
	   n3: [ c1, c2, c3, c4, c5, ??, ??, ??, c9 ]
	}
  }
  ◊slide{
    n3 can start dummy proposal messages for the slots which it missed and learn the value chosen for those slots from one (or more) nodes in the majority which accepted values for those slots

	◊multi-paxos-example{
	   n1: [ c1, c2, c3, c4, c5, c6, c7, c8, c9 ]
	   n2: [ c1, c2, c3, c4, c5, c6, c7, c8, c9 ]
	   n3: [ c1, c2, c3, c4, c5, c6, c7, c8, c9 ]
	}
  }
  ◊slide{
    There are optimizations and variations possible but you now know the crux of how Multi-Paxos is used to implement replicated state machines
  }
}

◊div[#:class "slide-section" #:title "Conclusion and wrap up"]{
  ◊slide{
    You now have a working knowledge of not only of how the Paxos algorithm achieves consensus but also how its used to implement a replicated state machines
  }

  ◊slide{
    Original Sources

	◊ul[#:style "text-align: left"]{
	◊li{
	  ◊a[#:href "https://lamport.azurewebsites.net/pubs/paxos-simple.pdf"]{Paxos Made Simple} ◊i{by Leslie Lamport}
	}
	◊li{
	  ◊a[#:href "https://lamport.azurewebsites.net/pubs/lamport-paxos.pdf"]{The Part-Time Parliament} ◊i{by Leslie Lamport}
	}
	}    
  }

  ◊slide{
    Thank you
  }
}

}

◊bottom-container{}
