
document.addEventListener("DOMContentLoaded", function(e) {

    showScenario("scenario-1", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept(blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept(blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "accept(green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "accept(green)", labelPlacement: 0.8 }
                ],
                state: {},
                colors: {},
                text: "Use the left and right arrows below to step through the simulation"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept(blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept(blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "accept(green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "accept(green)", labelPlacement: 0.8 }
                ],
                state: {},
                colors: {},
                text: "We can see accept messages by p1 and p2 on their way to the acceptors"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept(blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept(blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "accept(green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "accept(green)", labelPlacement: 0.8 }
                ],
                state: {},
                colors: {},
                text: "Remember these 4 msgs can reach a1 and a2 in any order"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept(blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept(blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "full", label: "accept(green)", labelPlacement: 0.8 },
                    { source: "p2", target: "a2", length: "half", label: "accept(green)", labelPlacement: 0.8 }
                ],
                state: { a1: "accepted(green)" },
                colors: { a1: "green" },
                text: "p2's msg reaches a1 first, a1 accepts it and records in its persistent state (see col on right)"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept(blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "accept(blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "full", label: "accept(green)", labelPlacement: 0.8 },
                    { source: "p2", target: "a2", length: "half", label: "accept(green)", labelPlacement: 0.8 }
                ],
                state: { a1: "accepted(green)", a2: "accepted(blue)" },
                colors: { a1: "green", a2: "blue" },
                text: "p1's msg reaches a2 next, a2 accepts and records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept(blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "accept(blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "full", label: "accept(green)", labelPlacement: 0.8 },
                    { source: "p2", target: "a2", length: "half", label: "accept(green)", labelPlacement: 0.8 }
                ],
                state: { a1: "accepted(green)", a2: "accepted(blue)" },
                colors: { a1: "green", a2: "blue" },
                text: "The state col shows the persistent state maintained by each node"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept(blue)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "full", label: "accept(green)", labelPlacement: 0.5 }
                ],
                state: { a1: "accepted(green)", a2: "accepted(blue)" },
                colors: { a1: "green", a2: "blue" },
                text: "a1 & a2 discard the accept msgs which arrive later as they have already accepted some value"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "accepted(green)", labelPlacement: 0.5 },
                ],
                state: { a1: "accepted(green)", a2: "accepted(blue)", l1: "a1(green)" },
                colors: { a1: "green", a2: "blue" },
                text: "a1 tells l1 it accepted green"
            },
            {
                messages: [
                    { source: "a2", target: "l1", length: "full", label: "accepted(blue)", labelPlacement: 0.5 },
                ],
                state: { a1: "accepted(green)", a2: "accepted(blue)", l1: "a1(green), a2(blue)" },
                colors: { a1: "green", a2: "blue"},
                text: "a2 tells l1 it accepted blue"
            },
            {
                messages: [
                    { source: "a2", target: "l1", length: "full", label: "accepted(blue)", labelPlacement: 0.5 },
                ],
                state: { a1: "accepted(green)", a2: "accepted(blue)", l1: "a1(green), a2(blue)" },
                colors: { a1: "green", a2: "blue"},
                text: "l1 is now confused as it's not sure what the group chose as a whole"
            }
        ]
    });

    showScenario("scenario-accept-first-promise", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: {},
                colors: {},
                text: "p1 and p2 try to get the acceptors promise they will only accept their accept msg"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "promise([1, p1])", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { a2: "promised([1, p1])" },
                colors: {},
                text: "p1's promise msg reaches a2 first and a2 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "a2", target: "p1", length: "half", label: "ack([1, p1])", labelPlacement: 0.3 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { a2: "promised([1, p1])" },
                colors: {},
                text: "a2 then sends acknowledge msg to p1"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "a2", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.4 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", a2: "promised([1, p1])" },
                colors: {},
                text: "a2 ack msg reaches p1 and p1 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "p2's promise msg then reaches a1 and a1 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "a1", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.3 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "a1 sends ack msg to p2 and p2 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "a1 has promised p1 and a2 has promise p2 at this stage"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "a1 has promised p1 and a2 has promise p2 at this stage"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "promise([1, p1])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "p1's promise msg reaches a1 and a1 rejects it as it has already promised"
            },
            {
                messages: [
                    { source: "p2", target: "a2", length: "full", label: "promise([1, p2])", labelPlacement: 0.5 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "p2's promise msg reaches a2 and a2 rejects it as it has already promised"
            },
            {
                messages: [
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "And ... we have a stalemate where the system can't make progress!"
            }
        ]
    });

    showScenario("scenario-accept-highest-promise", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: {},
                colors: {},
                text: "p1 and p2 try to get the acceptors promise they will only accept their accept msg"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "promise([1, p1])", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { a2: "promised([1, p1])" },
                colors: {},
                text: "p1's promise msg reaches a2 first and a2 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "a2", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.4 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", a2: "promised([1, p1])" },
                colors: {},
                text: "a2 sends ack msg to p1 and p1 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "p2's promise msg then reaches a1 and a1 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "a1", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.3 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "a1 sends ack msg to p2 and p2 records it"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "promise([1, p1])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p1])" },
                colors: {},
                text: "p1's promise msg reaches a1 and a1 rejects it since [1,p1] < [1,p2]"
            },
            {
                messages: [
                    { source: "p2", target: "a2", length: "full", label: "promise([1, p2])", labelPlacement: 0.5 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1)", a1: "promised([1, p2])", a2: "promised([1, p2])" },
                colors: {},
                text: "p2's promise msg reaches a2 and a2 changes its mind since [1,p2] > [1,p1]"
            },
            {
                messages: [
                    { source: "a2", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.5 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "promised([1, p2])", a2: "promised([1, p2])" },
                colors: {},
                text: "a2 sends ack message to p2"
            },
            {
                messages: [
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "promised([1, p2])", a2: "promised([1, p2])" },
                colors: {},
                text: "p2 has received acks from a1 & a2 so can now send its accept msgs"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.7 },
                    { source: "p2", target: "a2", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.9 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "promised([1, p2])", a2: "promised([1, p2])" },
                colors: {},
                text: "p2 send its accept msgs to both a1 and a2"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.7 },
                    { source: "p2", target: "a2", length: "full", label: "accept([1, p2], green)", labelPlacement: 0.7 }
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "promised([1, p2])", a2: "accepted([1, p2], green)" },
                colors: { a2: "green" },
                text: "p2's accept msg reaches a2 and it accepts it since it had promised [1,p2]"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "accept([1, p2], green)", labelPlacement: 0.5 },
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "accepted([1, p2], green)", a2: "accepted([1, p2], green)" },
                colors: { a1: "green", a2: "green" },
                text: "p2's accept msg reaches a1 and it accepts it since it had promised [1,p2]"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "accepted([1, p2], green)", labelPlacement: 0.3 },
                    { source: "a2", target: "l1", length: "full", label: "accepted([1, p2], green)", labelPlacement: 0.7 },
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "accepted([1, p2], green)", a2: "accepted([1, p2], green)", l1: "a1([1, p2], green), a2([1, p2], green)" },
                colors: { a1: "green", a2: "green", l1: "green" },
                text: "l1 learns both a1 and a2 have accepted green"
            },
            {
                messages: [
                ],
                state: { p1: "ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", a1: "accepted([1, p2], green)", a2: "accepted([1, p2], green)", l1: "a1([1, p2], green), a2([1, p2], green)" },
                colors: { a1: "green", a2: "green", l1: "green" },
                text: "Turns out we'll be painting the walls green!"
            }
        ]
    });

    showScenario("scenario-3", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "p1 is sending its promise message to both acceptors"
            }
            ,
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])"},
                colors: { },
                text: "Both acceptors receive p1's message, record it and send ack back"
            },
            {
                messages: [
                    { source: "a1", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.3 },
                    { source: "a2", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.3 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "p1 receives acks and records them"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "p1 sends its accept msgs and p2 sends its higher promise msgs at the same time"
            }
        ]
    });

    showScenario("scenario-3-alternative-1", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "Let's simulate alternative 1"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "accepted([1, p1])", a2: "accepted([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { a1: "blue", a2: "blue" },
                text: "Both acceptors accept p1's proposal and record it"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack(a1), ack(a2)"},
                colors: { a1: "blue", a2: "blue" },
                text: "Let's see what acceptors do when they get p2's promise msg"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "full", label: "promise([1, p2])", labelPlacement: 0.8 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack(a1), ack(a2)"},
                colors: { a1: "blue", a2: "blue" },
                text: "Both acceptors can reject p2's promise msg as they have already accepted"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "accepted([1, p1], blue)", labelPlacement: 0.5 },
                    { source: "a2", target: "l1", length: "full", label: "accepted([1, p1], blue)", labelPlacement: 0.8 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack(a1), ack(a2)", l1: "a1([1, p1], blue), a2([1, p1], blue)"},
                colors: { a1: "blue", a2: "blue", l1: "blue" },
                text: "l1 learns system has chosen blue"
            }
        ]
    });

    showScenario("scenario-3-alternative-2", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "Let's simulate alternative 2"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.7 },
                    { source: "p2", target: "a2", length: "full", label: "promise([1, p2])", labelPlacement: 0.7 }
                ],
                state: { a1: "promised([1, p2])", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "p2's promise msg reaches both acceptors causing them to change their mind"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "a1", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.4 },
                    { source: "a2", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.5 }
                ],
                state: { a1: "promised([1, p2])", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)"},
                colors: { },
                text: "Both acceptors send ack msgs to p2 and it records them"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.9 },

                ],
                state: { a1: "promised([1, p2])", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)"},
                colors: { },
                text: "p2 is now also ready to send its accept msgs"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.9 },

                ],
                state: { a1: "promised([1, p2])", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)"},
                colors: { },
                text: "p1's accept msgs finally reach both the acceptors"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a2", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.9 },

                ],
                state: { a1: "promised([1, p2])", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)"},
                colors: { },
                text: "Both acceptors reject it as they have promised a higher proposal number"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "accept([1, p2], green)", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "full", label: "accept([1, p2], green)", labelPlacement: 0.7 },

                ],
                state: { a1: "accepted([1, p2], green)", a2: "accepted([1, p2], green)", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)"},
                colors: { a1: "green", a2: "green" },
                text: "a1 and a2 accept p2's accept msg when it reaches them"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "accepted([1, p2], green)", labelPlacement: 0.4 },
                    { source: "a2", target: "l1", length: "full", label: "accepted([1, p2], green)", labelPlacement: 0.7 },

                ],
                state: { a1: "accepted([1, p2], green)", a2: "accepted([1, p2], green)", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2], a1), ack([1, p2], a2)", l1: "a1([1, p2], green), a2([1, p2], green)"},
                colors: { a1: "green", a2: "green", l1: "green" },
                text: "l1 learns the system has chosen green"
            }
        ]
    });

    showScenario("scenario-3-alternative-3", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "promised([1, p1])", a2: "promised([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "Let's simulate alternative 3"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { a1: "blue" },
                text: "p1's accept msg reaches and a1 accepts and records it"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "full", label: "promise([1, p2])", labelPlacement: 0.7 }
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { a1: "blue" },
                text: "a2's promise msg reaches a2 and it changes its mind and records it"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "a2", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.4 }
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "a2 sends its ack msg to p2 and it records it"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "Let's see how this evolves further"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "p1's accept msg reaches a2 but it rejects it since its promised a higher proposal number"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.7 },
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "p2's promise msg reaches a1 but it rejects it as its already accepted [1, p1]"
            },
            {
                messages: [
                ],
                state: { a1: "accepted([1, p1], blue)", a2: "promised([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "And ... we find ourselves in another stalemate!"
            }
        ]
    });

    showScenario("scenario-4", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2"],
        learners:["l1"],

        startXs: [120, 120, 220],

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "A note before we begin with this simulation - we'll be using abbreviations in the state column"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "The 'promised' record in acceptors state will be written as just 'p'"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "The 'accepted' record in acceptors state will be written as just 'a'"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "Ack record for proposers will continue to be written as ack"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "Let's begin the simulation"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "promis([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {},
                text: "p1 is sending its promise message to both acceptors"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "promise([1, p1])", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "full", label: "promise([1, p1])", labelPlacement: 0.7 }
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])"},
                colors: { },
                text: "Both acceptors receive p1's message, record it and send ack back"
            },
            {
                messages: [
                    { source: "a1", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.3 },
                    { source: "a2", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.3 }
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "p1 receives acks and records them"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.3 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { },
                text: "p1 sends its accept msgs and p2 sends its higher promise msgs at the same time"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "a([1, p1], blue), p([1, p1])", a2: "p([1, p1])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { a1: "blue" },
                text: "a1 accepts blue and records it (notice that it maintains both a and p records)"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "full", label: "promise([1, p2])", labelPlacement: 0.9 }
                ],
                state: { a1: "a([1, p1], blue), p([1, p1])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)"},
                colors: { a1: "blue" },
                text: "p2's promise msg reaches a2 and it records it (overwriting the earlier p record)"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                    { source: "a2", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.4 }
                ],
                state: { a1: "a([1, p1], blue), p([1, p1])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "a2 sends ack msg back to p2"
            },
            {
                messages: [
                    { source: "p1", target: "a2", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.7 },
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p1])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "p1's accept msg reaches a2 but it rejects it as its promised a higher proposal number"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "promise([1, p2])", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p1])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "p2's promise msg is on its way to a1 which has already accepted blue"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.7 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p2])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "p2's promise msg reaches a1, it records it but also sends already accepted color in ack"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "promise([1, p2])", labelPlacement: 0.7 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p2])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2])"},
                colors: { a1: "blue" },
                text: "Notice that the p record for a1 changed from p([1, p1]) to p([1, p2])"
            },
            {
                messages: [
                    { source: "a1", target: "p2", length: "full", label: "ack([1, p2], ([1 p1],blue))", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p2])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])"},
                colors: { a1: "blue" },
                text: "p2 gets a ack along with proposal a1 already accepted"
            },
            {
                messages: [
                    { source: "a1", target: "p2", length: "full", label: "ack([1, p2], ([1 p1],blue))", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p2])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])"},
                colors: { a1: "blue", p2: "blue" },
                text: "p2 decides to get blue accepted instead of its original green"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], blue)", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "half", label: "accept([1, p2], blue)", labelPlacement: 0.8 },
                ],
                state: { a1: "a([1, p1], blue), p([1, p2])", a2: "p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])"},
                colors: { a1: "blue", p2: "blue" },
                text: "p2 sends its accept msgs to both acceptors"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "half", label: "accept([1, p2], blue)", labelPlacement: 0.4 },
                    { source: "p2", target: "a2", length: "full", label: "accept([1, p2], blue)", labelPlacement: 0.7},
                ],
                state: { a1: "a([1, p1], blue), p([1, p2])", a2: "a([1, p2], blue), p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])"},
                colors: { a1: "blue", p2: "blue", a2: "blue" },
                text: "p2's accept msg reaches a2 and it accepts it"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "accept([1, p2], blue)", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p2], blue), p([1, p2])", a2: "a([1, p2], blue), p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])"},
                colors: { a1: "blue", p2: "blue", a2: "blue" },
                text: "p2's accept msg reaches a1 and it accepts it as well"
            },
            {
                messages: [
                    { source: "p2", target: "a1", length: "full", label: "accept([1, p2], blue)", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p2], blue), p([1, p2])", a2: "a([1, p2], blue), p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])"},
                colors: { a1: "blue", p2: "blue", a2: "blue" },
                text: "Note that the color in a1's 'a' record remains same but proposal number is updated"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "accepted([1, p2], blue)", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p2], blue), p([1, p2])", a2: "a([1, p2], blue), p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])", l1: "a1([1, p2], blue)"},
                colors: { a1: "blue", p2: "blue", a2: "blue" },
                text: "l1 learns that blue was chosen by a1 with proposal number [1, p2]"
            },
            {
                messages: [
                    { source: "a2", target: "l1", length: "full", label: "accepted([1, p2], blue)", labelPlacement: 0.4 },
                ],
                state: { a1: "a([1, p2], blue), p([1, p2])", a2: "a([1, p2], blue), p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])", l1: "a1([1, p2], blue), a2([1, p2], blue)"},
                colors: { a1: "blue", p2: "blue", a2: "blue", l1: "blue" },
                text: "l1 learns that blue was also chosen by a2 with same proposal number [1, p2]"
            },
            {
                messages: [
                ],
                state: { a1: "a([1, p2], blue), p([1, p2])", a2: "a([1, p2], blue), p([1, p2])", p1: "ack([1, p1], a1), ack([1, p1], a2)", p2: "ack([1, p2]), ack([1, p2])", l1: "a1([1, p2], blue), a2([1, p2], blue)"},
                colors: { a1: "blue", p2: "blue", a2: "blue", l1: "blue" },
                text: "Consensus has been achieved."
            }
        ]
    });

    showScenario("scenario-5", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2", "a3", "a4", "a5"],
        learners:["l1"],

        startXs: [150, 40, 200],

        interNodeSpacing: 80,

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "half", label: "to all of them", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p1", target: "a4", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p1", target: "a5", length: "half", label: "", labelPlacement: 0.7 }
                ],
                state: {},
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to all of them", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p1", target: "a4", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p1", target: "a5", length: "full", label: "", labelPlacement: 0.7 }
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])" },
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to all of them", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p1", target: "a4", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p1", target: "a5", length: "full", label: "", labelPlacement: 0.7 }
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])" },
                colors: {},
                downNodes: [ "a4", "a5" ],
                text: "a4 and a5 go offline and never reply to p1"
            },
            {
                messages: [
                    { source: "a1", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.4 },
                    { source: "a2", target: "p1", length: "full", label: "from all of them", labelPlacement: 0.7 },
                    { source: "a3", target: "p1", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])" },
                colors: {},
                downNodes: [ "a4", "a5" ],
                text: "p1 is able to proceed with accept msgs as it hears back from majority"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "half", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])" },
                colors: {},
                downNodes: [ "a4", "a5" ]
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p1], blue), p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])" },
                colors: { a1: "blue", a2: "blue", a3: "blue" },
                downNodes: [ "a4", "a5" ]
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "a([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "a2", target: "l1", length: "full", label: "from a1..a3", labelPlacement: 0.7 },
                    { source: "a3", target: "l1", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p1], blue), p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])", l1: "a1..a2([1, p1], blue)" },
                colors: { a1: "blue", a2: "blue", a3: "blue" },
                downNodes: [ "a4", "a5" ],
                text: "l1 has heard back from two but not the majority"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "a([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "a2", target: "l1", length: "full", label: "from a1..a3", labelPlacement: 0.7 },
                    { source: "a3", target: "l1", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p1], blue), p([1, p1])", a4: "p([1, p1])", a5: "p([1, p1])", l1: "a1..a3([1, p1], blue)" },
                colors: { a1: "blue", a2: "blue", a3: "blue", l1: "blue" },
                downNodes: [ "a4", "a5" ],
                text: "l1 has heard back from majority (3) and thus consensus has been achieved"
            }
        ]
    });

    showScenario("scenario-6", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2", "a3", "a4", "a5"],
        learners:["l1"],

        startXs: [150, 40, 200],

        interNodeSpacing: 80,

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "half", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: {},
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {},
                text: "Let's stop for a while and think how this can evolve"
            },
        ]
    });

    showScenario("scenario-6-5", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2", "a3", "a4", "a5"],
        learners:["l1"],

        startXs: [150, 40, 200],

        interNodeSpacing: 80,

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "half", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: {},
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {}
            },
            {
                messages: [
                    { source: "a1", target: "p1", length: "ful", label: "ack([1, p1])", labelPlacement: 0.7 },
                    { source: "a2", target: "p1", length: "full", label: "to a1..a3", labelPlacement: 0.4 },
                    { source: "a3", target: "p1", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" }
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "full", label: "p([1,p2])", labelPlacement: 0.6 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" }
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "accept([1,p2], green)", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" }
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "accept([1,p2], green)", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" },
                text: "a3 rejects p1's accept message as it has acked a higher proposal number"
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "half", label: "accept([1,p2], green)", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" },
                text: "p2 can go ahead without any conflict now"
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "full", label: "accept([1,p2], green)", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], green), p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a3: "green", a4: "green", a5: "green" }
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "a([1,p1], blue)", labelPlacement: 0.4 },
                    { source: "a2", target: "l1", length: "full", label: "to l2", labelPlacement: 0.8 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], green), p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])", l1: "a1..a2([1, p1], blue)" },
                colors: { a1: "blue", a2: "blue", a3: "green", a4: "green", a5: "green" },
                text: "11 has heard from some acceptors but not from the majority"
            },
            {
                messages: [
                    { source: "a3", target: "l1", length: "full", label: "a([1, p2], green)", labelPlacement: 0.4 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], green), p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])", l1: "a1..a2([1,p1], b), a3([1,p2], g)" },
                colors: { a1: "blue", a2: "blue", a3: "green", a4: "green", a5: "green" },
                text: "11 still hasn't heard one value and proposal number from the majority"
            },
            {
                messages: [
                    { source: "a4", target: "l1", length: "full", label: "a([1, p2], green)", labelPlacement: 0.4 },
                    { source: "a5", target: "l1", length: "full", label: "a([1, p2], green)", labelPlacement: 0.4 },
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], green), p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])", l1: "a1..a2([1,p1], b), a3..a5([1,p2], g)" },
                colors: { a1: "blue", a2: "blue", a3: "green", a4: "green", a5: "green", l1: "green" }
            },
            {
                messages: [
                ],
                state: { p1: "ack(a1..a3)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], green), p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])", l1: "a1..a2([1,p1], b), a3..a5([1,p2], g)" },
                colors: { a1: "blue", a2: "blue", a3: "green", a4: "green", a5: "green", l1: "green" },
                text: "Consensus has been achieved"
            }
        ]
    });

    showScenario("scenario-7", {

        proposers: ["p1", "p2"],
        acceptors: ["a1", "a2", "a3", "a4", "a5"],
        learners:["l1"],

        startXs: [150, 40, 200],

        interNodeSpacing: 80,

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "half", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: {},
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {}
            },
            {
                messages: [
                    { source: "a1", target: "p1", length: "full", label: "ack([1, p1])", labelPlacement: 0.4 },
                    { source: "a2", target: "p1", length: "full", label: "to p1", labelPlacement: 0.1 },
                    { source: "a3", target: "p1", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "a4", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.4 },
                    { source: "a5", target: "p2", length: "full", label: "to p2", labelPlacement: 0.1 },
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a4..a5)", a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {},
                text: "p1 can go ahead with sending accept msgs but p2 has to wait for one more ack"
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "accept([1, p1], blue)", labelPlacement: 0.5 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.8 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a4..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p1], blue), p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a3: "blue" }
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "full", label: "p([1,p2])", labelPlacement: 0.4 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a4..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p1], blue), p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a3: "blue" },
                text: "a3 changes its p record and sends back an ack message with already accepted color"
            },
            {
                messages: [
                    { source: "a3", target: "p2", length: "full", label: "ack([1,p2], blue, a([1, p1, blue]))", labelPlacement: 0.4 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p1], blue), p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue" },
                text: "p2 changes its mind and tries to get blue accepted when it receives ack msg"
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "full", label: "accept([1,p2], blue)", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.7 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.4 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], blue), p([1, p2])", a4: "a([1, p2], blue), p([1, p2])", a5: "a([1, p2], blue), p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue", a4: "blue", a5: "blue" }
            },
            {
                messages: [
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], blue), p([1, p2])", a4: "a([1, p2], blue), p([1, p2])", a5: "a([1, p2], blue), p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue", a4: "blue", a5: "blue" },
                text: "Now a majority of acceptors has accepted blue, let's see how l1 learns about it"
            },
            {
                messages: [
                    { source: "a1", target: "l1", length: "full", label: "a([1,p1], blue)", labelPlacement: 0.4 },
                    { source: "a2", target: "l1", length: "full", label: "a([1, p1], blue)", labelPlacement: 0.7 }
                ],
                state: { l1: "a1..a2([1, p1], blue)", p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], blue), p([1, p2])", a4: "a([1, p2], blue), p([1, p2])", a5: "a([1, p2], blue), p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue", a4: "blue", a5: "blue" },
                text: "l1 needs to hear from at least 3 nodes before learning chosen color"
            },
            {
                messages: [
                    { source: "a4", target: "l1", length: "full", label: "a([1,p2], blue)", labelPlacement: 0.4 },
                ],
                state: { l1: "a1..a2([1,p1], b), a4([1,p2], b)", p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], blue), p([1, p2])", a4: "a([1, p2], blue), p([1, p2])", a5: "a([1, p2], blue), p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue", a4: "blue", a5: "blue" },
                text: "l1 has heard blue from 3 nodes but no one proposal number has majority yet"
            },
            {
                messages: [
                    { source: "a3", target: "l1", length: "full", label: "a([1,p2], blue)", labelPlacement: 0.3 },
                    { source: "a5", target: "l1", length: "full", label: "a([1,p2], blue)", labelPlacement: 0.8 },
                ],
                state: { l1: "a1..a2([1,p1], b), a3..a5([1,p2], b)", p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], blue), p([1, p2])", a4: "a([1, p2], blue), p([1, p2])", a5: "a([1, p2], blue), p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue", a4: "blue", a5: "blue", l1: "blue" },
                text: "l1 has now heard blue with proposal number [1,p2] from majority"
            },
            {
                messages: [
                ],
                state: { l1: "a1..a2([1,p1], b), a3..a5([1,p2], b)", p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "a([1, p2], blue), p([1, p2])", a4: "a([1, p2], blue), p([1, p2])", a5: "a([1, p2], blue), p([1, p2])" },
                colors: { p2: "blue", a1: "blue", a2: "blue", a3: "blue", a4: "blue", a5: "blue", l1: "blue" },
                text: "Consensus has been achieved."
            }
        ]
    });

    showScenario("scenario-8", {
        proposers: ["p1", "p2", "p3"],
        acceptors: ["a1", "a2", "a3", "a4", "a5"],
        learners:["l1"],

        startXs: [120, 40, 200],

        interNodeSpacing: 80,

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green",
            p3: "orange"
        },

        steps: [
            {
                messages: [
                    { source: "p1", target: "a1", length: "half", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "half", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "half", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "half", label: "", labelPlacement: 0.7 },
                ],
                state: {},
                colors: {}
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "p([1, p1])", labelPlacement: 0.4 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a3", labelPlacement: 0.7 },
                    { source: "p1", target: "a3", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.8 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.7 },
                ],
                state: { a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {}
            },
            {
                messages: [
                    { source: "a1", target: "p1", length: "ful", label: "ack([1, p1])", labelPlacement: 0.4 },
                    { source: "a2", target: "p1", length: "full", label: "to p1", labelPlacement: 0.1 },
                    { source: "a3", target: "p1", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 },
                    { source: "a4", target: "p2", length: "full", label: "ack([1, p2])", labelPlacement: 0.4 },
                    { source: "a5", target: "p2", length: "full", label: "to p2", labelPlacement: 0.1 },
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a4..a5)", a1: "p([1, p1])", a2: "p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: {},
                text: ""
            },
            {
                messages: [
                    { source: "p1", target: "a1", length: "ful", label: "accept([1, p1], blue)", labelPlacement: 0.5 },
                    { source: "p1", target: "a2", length: "full", label: "to a1..a2", labelPlacement: 0.8 },
                    { source: "p1", target: "a3", length: "half", label: "", labelPlacement: 0.7 },
                    { source: "p2", target: "a3", length: "half", label: "p([1,p2])", labelPlacement: 0.4 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a4..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p1])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" }
            },
            {
                messages: [
                    { source: "p1", target: "a3", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.5 },
                    { source: "p2", target: "a3", length: "full", label: "p([1,p2])", labelPlacement: 0.8 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a4..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" },
                text: "a3 accepts p2's proposal (and will thus reject p1's accept request)"
            },
            {
                messages: [
                    { source: "p1", target: "a3", length: "half", label: "accept([1, p1], blue)", labelPlacement: 0.5 },
                    { source: "a3", target: "p2", length: "full", label: "ack([1,p2])", labelPlacement: 0.4 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" }
            },
            {
                messages: [
                    { source: "p1", target: "a3", length: "full", label: "accept([1, p1], blue)", labelPlacement: 0.5 },
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "p([1, p2])", a5: "p([1, p2])" },
                colors: { a1: "blue", a2: "blue" },
                text: "a3 rejects p1's accept request as it has acked p2"
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.5 },
                    { source: "p2", target: "a4", length: "full", label: "to a3..a5", labelPlacement: 0.7 },
                    { source: "p2", target: "a5", length: "full", label: "", labelPlacement: 0.5 },
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a4: "green", a5: "green" }
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.5 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p1])", a3: "p([1, p2])", a4: "a([1, p2], green), p([1, p2])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a4: "green", a5: "green" },
                text: "Before p2's accept messge reaches a3, p3 sends a higher proposal number to it"
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "half", label: "accept([1, p2], green)", labelPlacement: 0.3 },
                    { source: "p3", target: "a2", length: "full", label: "promise([1, p3])", labelPlacement: 0.5 },
                    { source: "p3", target: "a3", length: "full", label: "to a2..a4", labelPlacement: 0.8 },
                    { source: "p3", target: "a4", length: "full", label: "", labelPlacement: 0.5 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p3])", a3: "p([1, p3])", a4: "a([1, p2], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a4: "green", a5: "green" }
            },
            {
                messages: [
                    { source: "p2", target: "a3", length: "full", label: "accept([1, p2], green)", labelPlacement: 0.3 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p3])", a3: "p([1, p3])", a4: "a([1, p2], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a4: "green", a5: "green" },
                text: "a2's accept message is rejected by a3"
            },
            {
                messages: [
                    { source: "a2", target: "p3", length: "full", label: "ack([1, p3], ([1, p1], blue))", labelPlacement: 0.8 },
                    { source: "a3", target: "p3", length: "full", label: "ack([1, p3])", labelPlacement: 0.5 },
                    { source: "a4", target: "p3", length: "full", label: "ack([1, p3], ([1, p2], green))", labelPlacement: 0.2 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p3])", a3: "p([1, p3])", a4: "a([1, p2], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a4: "green", a5: "green" },
                text: "p3 receives acks with multiple colors"
            },
            {
                messages: [
                    { source: "a2", target: "p3", length: "full", label: "ack([1, p3], ([1, p1], blue))", labelPlacement: 0.8 },
                    { source: "a3", target: "p3", length: "full", label: "ack([1, p3])", labelPlacement: 0.5 },
                    { source: "a4", target: "p3", length: "full", label: "ack([1, p3], ([1, p2], green))", labelPlacement: 0.2 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p3])", a3: "p([1, p3])", a4: "a([1, p2], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { a1: "blue", a2: "blue", a4: "green", a5: "green" },
                text: "Should it get green accepted or blue?"
            },
            {
                messages: [
                    { source: "a2", target: "p3", length: "full", label: "ack([1, p3], ([1, p1], blue))", labelPlacement: 0.8 },
                    { source: "a3", target: "p3", length: "full", label: "ack([1, p3])", labelPlacement: 0.5 },
                    { source: "a4", target: "p3", length: "full", label: "ack([1, p3], ([1, p2], green))", labelPlacement: 0.2 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p1], blue), p([1, p3])", a3: "p([1, p3])", a4: "a([1, p2], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { p3: "green", a1: "blue", a2: "blue", a4: "green", a5: "green" },
                text: "It chooses the color accepted with highest proposal number (green)"
            },
            {
                messages: [
                    { source: "p3", target: "a2", length: "full", label: "accept([1, p3], green)", labelPlacement: 0.3 },
                    { source: "p3", target: "a3", length: "full", label: "to a2..a4", labelPlacement: 0.7 },
                    { source: "p3", target: "a4", length: "full", label: "", labelPlacement: 0.2 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p3], green), p([1, p3])", a3: "a([1, p3], green), p([1, p3])", a4: "a([1, p3], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])" },
                colors: { p3: "green", a1: "blue", a2: "green", a3: "green", a4: "green", a5: "green" },
                text: ""
            },
            {
                messages: [
                    { source: "a2", target: "l1", length: "full", label: "a([1, p3], green)", labelPlacement: 0.3 },
                    { source: "a3", target: "l1", length: "full", label: "", labelPlacement: 0.7 },
                    { source: "a4", target: "l1", length: "full", label: "", labelPlacement: 0.2 }
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p3], green), p([1, p3])", a3: "a([1, p3], green), p([1, p3])", a4: "a([1, p3], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])", l1: "a2..a3([1, p3], green)" },
                colors: { p3: "green", a1: "blue", a2: "green", a3: "green", a4: "green", a5: "green", l1: "green" }
            },
            {
                messages: [
                ],
                state: { p1: "ack(a1..a3)", p2: "ack(a3..a5)", a1: "a([1, p1], blue), p([1, p1])", a2: "a([1, p3], green), p([1, p3])", a3: "a([1, p3], green), p([1, p3])", a4: "a([1, p3], green), p([1, p3])", a5: "a([1, p2], green), p([1, p2])", l1: "a2..a3([1, p3], green)" },
                colors: { p3: "green", a1: "blue", a2: "green", a3: "green", a4: "green", a5: "green", l1: "green" },
                text: "Consensus has been achieved."
            }
        ]
    });

    showScenario("scenario-9", {

        proposers: ["n1"],
        acceptors: ["n2", "n3"],
        learners:[],

        startXs: [150, 80, 200],

        interNodeSpacing: 150,

        rowColors: ["maroon", "green", "blue"],

        colors: {
            p1: "blue",
            p2: "green",
            p3: "blue"
        },

        steps: [
            {
                messages: [
                ],
                state: { },
                colors: { },
                text: "n1 is the leader (distinguished proposer), an external client contacts it to get blue chosen"
            },
            {
                messages: [
                    { source: "n1", target: "n1", orientation: "right", label: "promise([1, n1])" },
                    { source: "n1", target: "n2", length: "full", label: "promise([1, n1])", labelPlacement: 0.3 },
                    { source: "n1", target: "n3", length: "full", label: "promise([1, n1])", labelPlacement: 0.7 },
                ],
                state: { n1: "p([1, n1])", n2: "p([1, n1])", n3: "p([1, n1])" },
                colors: { },
                text: "n1 sends promise messages to everyone including itself"
            },
            {
                messages: [
                    { source: "n1", target: "n1", orientation: "left", labelOffset: -120, label: "ack([1, n1])" },
                    { source: "n2", target: "n1", length: "full", label: "ack([1, n1])", labelPlacement: 0.3 },
                    { source: "n3", target: "n1", length: "full", label: "ack([1, n1])", labelPlacement: 0.7 },
                ],
                state: { n1: "p([1, n1]), ack(n1..n3)", n2: "p([1, n1])", n3: "p([1, n1])" },
                colors: {},
                text: "ack messages, including from n1 back to itself"
            },
            {
                messages: [
                    { source: "n1", target: "n1", orientation: "right", label: "accept([1, n1], blue)" },
                    { source: "n1", target: "n2", length: "full", label: "accept([1, n1], blue)", labelPlacement: 0.3 },
                    { source: "n1", target: "n3", length: "full", label: "accept([1, n1], blue)", labelPlacement: 0.7 },
                ],
                state: { n1: "a([1, n1], blue),p([1, n1]),ack(n1..n3)", n2: "a([1, n1], blue), p([1, n1])", n3: "a([1, n1], blue), p([1, n1])" },
                colors: { n1: "blue", n2: "blue", n3: "blue" },
                text: "n1 sends accept messages to everyone including itslef"
            },
            {
                messages: [
                    { source: "n1", target: "n1", orientation: "left", labelOffset: -120, label: "a([1, n1], blue)" },
                    { source: "n2", target: "n1", length: "full", label: "a([1, n1], blue)", labelPlacement: 0.3 },
                    { source: "n3", target: "n1", length: "full", label: "a([1, n1], blue)", labelPlacement: 0.7 },
                ],
                state: { n1: "a([1, n1], blue),p([1, n1]),ack(n1..n3)", n2: "a([1, n1], blue), p([1, n1])", n3: "a([1, n1], blue), p([1, n1])" },
                colors: { n1: "blue", n2: "blue", n3: "blue" },
                text: "n1 now learns that blue has accepted by majority of nodes"
            },
            {
                messages: [
                    { source: "n1", target: "n2", length: "full", label: "a([1, n1], blue)" },
                    { source: "n2", target: "n2", orientation: "left", length: "full", label: "", labelPlacement: 0.3 },
                    { source: "n3", target: "n2", length: "full", label: "a([1, n1], blue)", labelPlacement: 0.9 },
                ],
                state: { n1: "a([1, n1], blue),p([1, n1]),ack(n1..n3)", n2: "a([1, n1], blue), p([1, n1])", n3: "a([1, n1], blue), p([1, n1])" },
                colors: { n1: "blue", n2: "blue", n3: "blue" },
                text: "n2 now learns that blue has accepted by majority of nodes"
            },
            {
                messages: [
                    { source: "n1", target: "n3", length: "full", label: "a([1, n1], blue)" },
                    { source: "n2", target: "n3", length: "full", label: "a([1, n1], blue)", labelPlacement: 0.1 },
                    { source: "n3", target: "n3", orientation: "right", length: "full", label: "" },
                ],
                state: { n1: "a([1, n1], blue),p([1, n1]),ack(n1..n3)", n2: "a([1, n1], blue), p([1, n1])", n3: "a([1, n1], blue), p([1, n1])" },
                colors: { n1: "blue", n2: "blue", n3: "blue" },
                text: "n3 now learns that blue has accepted by majority of nodes"
            }
        ]
    });
});
