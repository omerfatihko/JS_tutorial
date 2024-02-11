import {writable} from "svelte/store";

const PollStore =  writable([
    {
        id:1,
        question: "Dummy question",
        optionA: "Dummy option A",
        optionB: "Dummy option B",
        votesA: 7,
        votesB: 3
    },
]);

export default PollStore;
