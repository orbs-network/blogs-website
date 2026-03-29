---
layout: partials/shared/mappers/blog-mapper
image: /assets/img/blog/orbs-update-feb-2019/bg.jpg
blogUrl: orbs-update-feb-2019
date: 2019-02-05
title: Orbs Update February 2019
author:
  - /common/authors/Nate.md
type:
short_description:
---

The first month of 2019 is now behind us (I know, right?), and what a month it was! Kicking the year off with amazing news, events and awards, everyone here at Orbs is looking forward to the exciting road ahead.

Some highlights from the past 30 days:

![Orbs at WEF Davos 2019](/assets/img/blog/orbs-update-feb-2019/Orbs-at-WEF-Davos-2019.jpeg)

### We have an Orbs launch date — Yeah baby!!!

After a year of anticipation and sleepless nights of hard work, we are proud to announce that a production-ready version of the Orbs Blockchain network will become available to the general public on the 28th of March. More details regarding specific details of the release will be made available soon in our official channels, mainly [Telegram](https://t.me/orbs_network) and [Twitter](https://twitter.com/orbs_network).

[Click here](https://orbs.com/federation/) if you’d like to become an Orbs validator.

At this moment we also want to express appreciation for our followers and fans who have been on the journey along with us from the early days, for your patience with this very technical process. ❤

### R&D Updates

**Gamma CLI v0.6.4 and Gamma server v0.8.0 released**

We’re moving forward towards Orbs v1 release with fresh versions of Gamma and Gamma CLI, the toolset for smart contract developers for testing Orbs contracts on their own machine. The new versions support the latest changes to the Orbs protocol. Gamma CLI was also split to its own repo available [here](https://github.com/orbs-network/gamma-cli).

**Nebula CLI approaching initial release**

Nebula is the tool for the creation and management of an Orbs Constellation (a blockchain node). It is aimed towards node operators and allows them to automatically set up the infrastructure required to run a node on a cloud service like AWS. The Nebula code base will be made open source during Orbs v1 release but the tool itself will be published to NPM beforehand.

**Improved Contract SDK**

As parts of the ongoing efforts to polish the Orbs contract SDK, significant parts were added to the [documentation](https://orbs.gitbook.io/contract-sdk/). The API surface of the SDK has also increased with support for Events, SafeMath and Ethereum cross-chain API. We’re about to publish a new example to the [SDK itself](https://github.com/orbs-network/orbs-contract-sdk) showing a port of an ERC20 compatible token.

**POS Research**

Orbs proof of stake model will be used in v1 to select network validators. The final details of the launch model have been ironed out and development is running full steam ahead. The voting contracts used to choose validators will be one of the first apps running on top of Orbs on launch!

**JavaScript Processor**

Smart contracts running on Orbs are currently implemented in the Go language. Orbs architecture supports multiple processors due to our belief that polyglot environments are better positioned for reaching developer adoption. The next processor after Go is planned to be JavaScript — the most popular programming language today. Development has started on the new processor, incorporating the V8 JS engine right into the node core.

**Battleship game running on blockchain**

Eyal Semel, an intern in the Orbs team, has been working on an example of a Battleship game running on blockchain. The idea is to improve the Orbs smart contract SDK through actual use with a very short feedback cycle. The game is currently backend-only — meaning users have to use Gamma CLI to send transactions to it. We’re thinking about writing a cool client for it using the Orbs client SDK in one of our upcoming hackathons.

### Events

**Ivan on Tech at Orbs**

![ivan on tech uriel orbs](/assets/img/blog/orbs-update-feb-2019/ivan-on-tech-uriel-orbs-1.jpeg)

On the 14th, we’ve had the pleasure of hosting a Q&A event with the renown Swedish blockchain developer and educator Ivan Liljeqvist, known by most as [Ivan on Tech](https://www.youtube.com/user/LiljeqvistIvan), at Orbs offices in Tel-Aviv.

In an intimate setting attended by top names in Israeli blockchain, Ivan covered a range of topics from technology and markets to private life.

Special thanks to [WIB](https://twitter.com/womeninblock) for putting together the wonderful evening on such short notice!

[Click here to watch the Q&A.](https://www.youtube.com/watch?v=gNs-a6UM5eg)

### WEF 2019

![Unlocking Human Potential with Blockchain & AI](/assets/img/blog/orbs-update-feb-2019/Unlocking-Human-Potential-with-Blockchain-AI-300x168.png)

_The gang goes to Davos!_

Orbs traveled to speak at the World Economic Forum on the topic of Unlocking Human Potential with Blockchain & AI, later attending a panel with The Global Blockchain Business Council on the topic of Blockchain Interoperability.

...

<iframe src='https://streamable.com/s/33pk7/lsfcwx'></iframe>

Daniel Peled’s intro on GBBC panel at WEF19

The following day, Orbs President Daniel Peled spoke at a Hub Culture forum and co-hosted a private lunch with MIT Media Lab on the Future Blockchain and AI Systems, alongside Doctor Yaniv Altshuler of Endor.

![MIT Media Lab on the Future Blockchain and AI Systems](/assets/img/blog/orbs-update-feb-2019/MIT-Media-Lab-on-the-Future-Blockchain-and-AI-Systems.png)

Later at a private lunch hosted by MIT Connection Science, Hub Culture interviewed Daniel live on the air. The entire one-on-one interview can be viewed [here](https://www.youtube.com/watch?v=hy2AJnXXVQA).

The trip was a great success and the gang returned tired but satisfied.

![Orbs in Davos](/assets/img/blog/orbs-update-feb-2019/Orbs-in-Davos.png)

### Japan Blockchain Conference

![Orbs at the 2019 Japan Blockchain Conference](/assets/img/blog/orbs-update-feb-2019/Orbs-at-the-2019-Japan-Blockchain-Conference-300x225.png)

_Big in Japan!_ Our delegation to Yokohama was in JBC 2019 to partake in several panels and events. Co-Founder Uriel Peled gave a keynote and spoke about the Orbs blockchain giving a first look at our launch date and plans.

Our very own Mayo Hotta represented us in a Venture Times in-depth and comprehensive interview anout the Orbs project which can be [read here in the Japanese language.](https://venturetimes.jp/unclassified/41063.html)

On the final day of the conference, Orbs [was awarded the Excellent Award at the #JBC Blockchain Contest](https://twitter.com/japan_bcc/status/1090898438651170821)! Congratulations all around! 👏👏👏👏👏

...

### Upcoming

We are continuing to work at full throttle with our design partners as we gear towards launch. This month we’ll be attending several global events, notably the [MWC Barcelona](https://www.mwcbarcelona.com/) (formally known as Mobile World Congress).

Are you in town? Let’s find a time to meet up!

#### What’s next?

**Next steps on the technology roadmap:**

- **Performance optimization —** Improving stability under stress for broad release of the network in the short and long terms.
- **Hubble Block Explorer —** Release of the web-based tool used for acquiring information from the virtual chain (e.g. committed blocks and transaction confirmations), as well as show diagnostics data related to the network health and performance. The new explorer will also perform analytics on contracts running on virtual chains.
- **Helix Consensus Protocol —** Integrating our Lean Helix Consensus Protocol into the node software stack. The implementation of Lean Helix has been a massive and intensive project ongoing for several months by the Orbs dev team and we are super excited to show it to you! Detailed post to come.
- **Autonomous Swap Bridge —** mechanism for transferring existing ERC20 tokens from Ethereum securely into Orbs and then back again. This will enable the scaling of apps running on Ethereum, while still maintaining the native benefits of Ethereum as a base-layer.
- **POS Security Model —** Put into high gear the development of Orbs’ proof of stake model designed to ensure the sustainability of the decentralized, public ecosystem.

#### Also

TLV team photo with new sweatshirts and smiley faces :)

![Orbs is black](/assets/img/blog/orbs-update-feb-2019/Orbs-in-black.png)

That’s it for now! Be sure to follow all Orbs’ official channels, as well as our popular Business of Blockchain newsletter (below) for frequent news and updates. You can also reach out to yours truly personally [via LinkedIn](https://www.linkedin.com/in/natesimantov/).
