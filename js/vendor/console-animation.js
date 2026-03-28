const consoleBody = document.querySelector('.console--body');

const phrases = [
  {
    year: '2022',
    logStyle: "outdated-log",
    type: "FACT",
    messages: [
      "AI was a novelty. ChatGPT had just launched",
      "Everyone wanted the most powerful, all-in-one smartphone"
    ]
  },
  {
    year: '2026',
    logStyle: "error-log",
    type: "ERROR",
    messages: ["CRITICAL_UPDATE_DETECTED..."]
  },
  {
    year: '2026',
    logStyle: "updated-log",
    type: "FACT",
    messages: [
      "SYSTEM-UPDATE detected\n",
      "We have entered the era of agentic AI",
      "We are seeing a digital detox"
    ]
  },
  {
    year: '2026',
    logStyle: "info-log",
    type: "STATUS",
    messages: [
      "Site_Update in progress...",
      "This site is being re-initialized for 2026 and beyond."
    ]
  }

]

const insertToDom = (node) => {
  consoleBody.appendChild(node)
}

export const loadConsole = () => {
  let time = 500
  phrases.forEach(phrase => {
    phrase.messages.forEach(message => {
      const pNode = document.createElement("p");
      pNode.textContent = `[${phrase.year}-LOG] ${phrase.type} ${message}`;
      pNode.classList.add(phrase.logStyle);
      setTimeout(() => insertToDom(pNode), time);
      time += 700
    })
  })
}
