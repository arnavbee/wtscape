document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired.");

  const graphData = {
    nodes: [
      // ... your nodes ...
      {
        id: "node1",
        label: "Node 1",
        previewText: "A Calm Mind, a Fit Body, a House Full of Love",
        url: "A Calm Mind, a Fit Body, a House Full of Love.html",
      },
      {
        id: "node2",
        label: "Node 2",
        previewText: "Accountability Means Letting People Criticize You",
        content: "<p>Content for Node 2</p>",
        url: "Accountability Means Letting People Criticize You.html",
      },
      {
        id: "node3",
        label: "Node 3",
        previewText: "Arm Yourself With Specific Knowledge",
        content: "<p>Content for Node 3</p>",
        url: "Arm Yourself With Specific Knowledge.html",
      },
      {
        id: "node4",
        label: "Node 4",
        previewText: "Be Too Busy to ‘Do Coffee’.html",
        content: "<p>Content for Node 3</p>",
        url: "Be Too Busy to ‘Do Coffee’.html",
      },
      {
        id: "node5",
        label: "Node 5",
        previewText: "Being Ethical Is Long-Term Greedy",
        content: "<p>Content for Node 3</p>",
        url: "Being Ethical Is Long-Term Greedy.html",
      },
      {
        id: "node6",
        label: "Node 6",
        previewText: "Compounding Relationships Make Life Easier",
        content: "<p>Content for Node 3</p>",
        url: "Compounding Relationships Make Life Easier.html",
      },
      {
        id: "node7",
        label: "Node 7",
        previewText: "Consumer Surplus Getting More Than You Paid For",
        content: "<p>Content for Node 3</p>",
        url: "Consumer Surplus Getting More Than You Paid For.html",
      },
      {
        id: "node8",
        label: "Node 8",
        previewText: "How To Get Rich (Without Getting Lucky)",
        content: "<p>Content for Node 3</p>",
        url: "CONTENTS PAGE.html",
      },
      {
        id: "node9",
        label: "Node 9",
        previewText: "Embrace Accountability to Get Leverage",
        content: "<p>Content for Node 3</p>",
        url: "Embrace Accountability to Get Leverage.html",
      },
      {
        id: "node10",
        label: "Node 10",
        previewText: "Arm Yourself With Specific Knowledge",
        content: "<p>Content for Node 3</p>",
        url: "Arm Yourself With Specific Knowledge.html",
      },
      {
        id: "node11",
        label: "Node 11",
        previewText: "Escape Competition Through Authenticity",
        content: "<p>Content for Node 3</p>",
        url: "Escape Competition Through Authenticity.html",
      },
      {
        id: "node12",
        label: "Node 12",
        previewText: "Eventually You Will Get What You Deserve",
        content: "<p>Content for Node 3</p>",
        url: "Eventually You Will Get What You Deserve.html",
      },
      {
        id: "node13",
        label: "Node 13",
        previewText: "Example From Laborer to Entrepreneur",
        content: "<p>Content for Node 3</p>",
        url: "Example From Laborer to Entrepreneur.html",
      },
      {
        id: "node14",
        label: "Node 14",
        previewText: "Externalities Calculating the Hidden Costs of Products",
        content: "<p>Content for Node 3</p>",
        url: "Externalities Calculating the Hidden Costs of Products.html",
      },
      {
        id: "node15",
        label: "Node 15",
        previewText: "Finding Time to Invest in Yourself",
        content: "<p>Content for Node 3</p>",
        url: "Finding Time to Invest in Yourself.html",
      },
      {
        id: "node16",
        label: "Node 16",
        previewText: "Free Markets Are Intrinsic to Humans",
        content: "<p>Content for Node 3</p>",
        url: "Free Markets Are Intrinsic to Humans.html",
      },
      {
        id: "node17",
        label: "Node 17",
        previewText: "Give Society What It Doesn’t Know How to Get",
        content: "<p>Content for Node 3</p>",
        url: "Give Society What It Doesn’t Know How to Get.html",
      },
      {
        id: "node18",
        label: "Node 18",
        previewText: "Judgment Is the Decisive Skill",
        content: "<p>Content for Node 3</p>",
        url: "Judgment Is the Decisive Skill.html",
      },
      {
        id: "node19",
        label: "Node 19",
        previewText: "Keep Redefining What You Do",
        content: "<p>Content for Node 3</p>",
        url: "Keep Redefining What You Do.html",
      },
      {
        id: "node20",
        label: "Node 20",
        previewText: "Kelly Criterion Avoid Ruin",
        content: "<p>Content for Node 3</p>",
        url: "Kelly Criterion Avoid Ruin.html",
      },
      {
        id: "node21",
        label: "Node 21",
        previewText: "Labor and Capital Are Old Leverage",
        content: "<p>Content for Node 3</p>",
        url: "Labor and Capital Are Old Leverage.html",
      },
      {
        id: "node22",
        label: "Node 22",
        previewText: "Learn to Sell, Learn to Build",
        content: "<p>Content for Node 3</p>",
        url: "Learn to Sell, Learn to Build.html",
      },
      {
        id: "node23",
        label: "Node 23",
        previewText: "Live Below Your Means for Freedom",
        content: "<p>Content for Node 3</p>",
        url: "Live Below Your Means for Freedom.html",
      },
      {
        id: "node24",
        label: "Node 24",
        previewText: "Make Abundance for the World",
        content: "<p>Content for Node 3</p>",
        url: "Make Abundance for the World.html",
      },
      {
        id: "node25",
        label: "Node 25",
        previewText: "Make Luck Your Destiny",
        content: "<p>Content for Node 3</p>",
        url: "Make Luck Your Destiny.html",
      },
      {
        id: "node26",
        label: "Node 26",
        previewText: "Making Money Isn’t About Luck",
        content: "<p>Content for Node 3</p>",
        url: "Making Money Isn’t About Luck.html",
      },
      {
        id: "node27",
        label: "Node 27",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },
      {
        id: "node28",
        label: "Node 28",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },

      {
        id: "node29",
        label: "Node 29",
        previewText: "Partner With Rational Optimists",
        content: "<p>Content for Node 3</p>",
        url: "Partner With Rational Optimists.html",
      },
      {
        id: "node30",
        label: "Node 30",
        previewText:
          "Pick Business Partners With High Intelligence, Energy, and Integrity",
        content: "<p>Content for Node 3</p>",
        url: "Pick Business Partners With High Intelligence, Energy, and Integrity.html",
      },
      {
        id: "node31",
        label: "Node 31",
        previewText: "Play Long-Term Games With Long-Term People",
        content: "<p>Content for Node 3</p>",
        url: "Play Long-Term Games With Long-Term People.html",
      },
      {
        id: "node32",
        label: "Node 32",
        previewText: "Play Stupid Games, Win Stupid Prizes",
        content: "<p>Content for Node 3</p>",
        url: "Play Stupid Games, Win Stupid Prizes.html",
      },
      {
        id: "node33",
        label: "Node 33",
        previewText: "Principles Are for Dealing With Reality",
        content: "<p>Content for Node 3</p>",
        url: "Principles Are for Dealing With Reality.html",
      },
      {
        id: "node34",
        label: "Node 34",
        previewText: "Productize Yourself",
        content: "<p>Content for Node 3</p>",
        url: "Productize Yourself.html",
      },
      {
        id: "node35",
        label: "Node 35",
        previewText: "Read What You Love Until You Love to Read",
        content: "<p>Content for Node 3</p>",
        url: "Read What You Love Until You Love to Read.html",
      },
      {
        id: "node36",
        label: "Node 36",
        previewText: "Schelling Point Cooperating Without Communicating",
        content: "<p>Content for Node 3</p>",
        url: "Schelling Point Cooperating Without Communicating.html",
      },
      {
        id: "node37",
        label: "Node 37",
        previewText: "Seek Wealth, Not Money or Status",
        content: "<p>Content for Node 3</p>",
        url: "Seek Wealth, Not Money or Status.html",
      },
      {
        id: "node38",
        label: "Node 38",
        previewText: "Set an Aspirational Hourly Rate",
        content: "<p>Content for Node 3</p>",
        url: "Set an Aspirational Hourly Rate.html",
      },
      {
        id: "node39",
        label: "Node 39",
        previewText: "Specific Knowledge Is Highly Creative or Technical",
        content: "<p>Content for Node 3</p>",
        url: "Specific Knowledge Is Highly Creative or Technical.html",
      },
      {
        id: "node40",
        label: "Node 40",
        previewText: "Take Accountability To Earn Trust",
        content: "<p>Content for Node 3</p>",
        url: "Take Accountability To Earn Trust.html",
      },
      {
        id: "node41",
        label: "Node 41",
        previewText: "The Foundations Are Math and Logic",
        content: "<p>Content for Node 3</p>",
        url: "The Foundations Are Math and Logic.html",
      },
      {
        id: "node42",
        label: "Node 42",
        previewText:
          "The Internet Has Massively Broadened Career Possibilities",
        content: "<p>Content for Node 3</p>",
        url: "The Internet Has Massively Broadened Career Possibilities.html",
      },
      {
        id: "node43",
        label: "Node 43",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },
      {
        id: "node44",
        label: "Node 44",
        previewText: "There Are No Get Rich Quick Schemes",
        content: "<p>Content for Node 3</p>",
        url: "There Are No Get Rich Quick Schemes.html",
      },
      {
        id: "node45",
        label: "Node 45",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },
      {
        id: "node46",
        label: "Node 46",
        previewText: "There’s No Actual Skill Called ‘Business'",
        content: "<p>Content for Node 3</p>",
        url: "There’s No Actual Skill Called ‘Business’.html",
      },
      {
        id: "node47",
        label: "Node 47",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },
      {
        id: "node48",
        label: "Node 48",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },
      {
        id: "node49",
        label: "Node 49",
        previewText: "Turn Short-Term Games Into Long-Term Games",
        content: "<p>Content for Node 3</p>",
        url: "Turn Short-Term Games Into Long-Term Games.html",
      },
      {
        id: "node50",
        label: "Node 50",
        previewText: "Net Present Value What Future Income Is Worth Today",
        content: "<p>Content for Node 3</p>",
        url: "Net Present Value What Future Income Is Worth Today.html",
      },
      {
        id: "node51",
        label: "Node 51",
        previewText: "We Should Eventually Be Working for Ourselves",
        content: "<p>Content for Node 3</p>",
        url: "We Should Eventually Be Working for Ourselves.html",
      },
      {
        id: "node52",
        label: "Node 52",
        previewText: "Work As Hard As You Can",
        content: "<p>Content for Node 3</p>",
        url: "Work As Hard As You Can.html",
      },
      {
        id: "node53",
        label: "Node 53",
        previewText: "You Won’t Get Rich Renting Out Your Time",
        content: "<p>Content for Node 3</p>",
        url: "You Won’t Get Rich Renting Out Your Time.html",
      },
      {
        id: "node54",
        label: "Node 54",
        previewText: "Being Unhappy Is Extremely Inefficient",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Being Unhappy Is Extremely Inefficient.html",
      },
      {
        id: "node55",
        label: "Node 55",
        previewText: "Happiness",
        content: "<p>Content for Node 3</p>",
        url: "CONTENTS PAGE.html",
      },
      {
        id: "node56",
        label: "Node 56",
        previewText: "Breaking Addiction Is Socially Unacceptable",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Breaking Addiction Is Socially Unacceptable.html",
      },
      {
        id: "node57",
        label: "Node 57",
        previewText: "Desire Is a Contract You Make to Be Unhappy",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Desire Is a Contract You Make to Be Unhappy.html",
      },
      {
        id: "node58",
        label: "Node 58",
        previewText: "Finding Peace from Mind.html",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Finding Peace from Mind.html",
      },
      {
        id: "node59",
        label: "Node 59",
        previewText:
          "Groups Search for Consensus, Individuals Search for Truth",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Groups Search for Consensus, Individuals Search for Truth.html",
      },
      {
        id: "node60",
        label: "Node 60",
        previewText: "You Won’t Get Rich Renting Out Your Time",
        content: "<p>Content for Node 3</p>",
        url: "You Won’t Get Rich Renting Out Your Time.html",
      },
      {
        id: "node61",
        label: "Node 61",
        previewText: "You Won’t Get Rich Renting Out Your Time",
        content: "<p>Content for Node 3</p>",
        url: "You Won’t Get Rich Renting Out Your Time.html",
      },
      {
        id: "node62",
        label: "Node 62",
        previewText: "Happiness Is a Skill You Can Develop",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Happiness Is a Skill You Can Develop.html",
      },
      {
        id: "node63",
        label: "Node 63",
        previewText: "Happiness Is Not Science or Math",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Happiness Is Not Science or Math.html",
      },
      {
        id: "node64",
        label: "Node 64",
        previewText: "Happiness Is Peace in Motion",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Happiness Is Peace in Motion.html",
      },
      {
        id: "node65",
        label: "Node 65",
        previewText:
          "Happiness Without Material Comfort Is Playing on Hard Mode",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Happiness Without Material Comfort Is Playing on Hard Mode.html",
      },
      {
        id: "node66",
        label: "Node 66",
        previewText: "If You’re So Smart, Why Aren’t You Happy",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/If You’re So Smart, Why Aren’t You Happy.html",
      },
      {
        id: "node67",
        label: "Node 67",
        previewText: "Live Long Enough and You’ll Become a Philosopher",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Live Long Enough and You’ll Become a Philosopher.html",
      },
      {
        id: "node68",
        label: "Node 68",
        previewText:
          "The Closer You Are to the Truth, the More Silent You Become Inside",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/The Closer You Are to the Truth, the More Silent You Become Inside.html",
      },
      {
        id: "node69",
        label: "Node 69",
        previewText: "The Modern Struggle Is Fighting Weaponized Addiction",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/The Modern Struggle Is Fighting Weaponized Addiction.html",
      },
      {
        id: "node70",
        label: "Node 70",
        previewText: "The Path to Peace Is Truth",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/The Path to Peace Is Truth.html",
      },
      {
        id: "node71",
        label: "Node 71",
        previewText: "Work the Least for It",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Work the Least for It.html",
      },
      {
        id: "node72",
        label: "Node 72",
        previewText: "Work the Least for It",
        content: "<p>Content for Node 3</p>",
        url: "Happiness/Work the Least for It.html",
      },
      {
        id: "node73",
        label: "Node 73",
        previewText: "All Knowledge Is Conjectural",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/All Knowledge Is Conjectural.html",
      },
      {
        id: "node74",
        label: "Node 74",
        previewText: "Beginning To Infinity",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/CONTENTS PAGE.html",
      },
      {
        id: "node75",
        label: "Node 75",
        previewText: "Every Theory Is Held Inside a Physical Substrate",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Every Theory Is Held Inside a Physical Substrate.html",
      },
      {
        id: "node76",
        label: "Node 76",
        previewText: "Explanations That Reach the Entire Universe",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Explanations That Reach the Entire Universe.html",
      },
      {
        id: "node77",
        label: "Node 77",
        previewText: "Good Explanations Are Acts of Creativity",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Good Explanations Are Acts of Creativity.html",
      },
      {
        id: "node78",
        label: "Node 78",
        previewText: "Good Explanations Are Hard to Vary",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Good Explanations Are Hard to Vary.html",
      },
      {
        id: "node79",
        label: "Node 79",
        previewText: "Humans Are Unique in Our Ability to Understand Things",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Humans Are Unique in Our Ability to Understand Things 1.html",
      },
      {
        id: "node80",
        label: "Node 80",
        previewText: "Is Light a Particle or a Wave",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Is Light a Particle or a Wave.html",
      },
      {
        id: "node81",
        label: "Node 81",
        previewText: "Is the Universe Discrete or Continuous",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Is the Universe Discrete or Continuous.html",
      },
      {
        id: "node83",
        label: "Node 83",
        previewText: "It’s Easy to Extrapolate How Things Will Get Worse",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/It’s Easy to Extrapolate How Things Will Get Worse.html",
      },
      {
        id: "node84",
        label: "Node 84",
        previewText: "It’s Impossible to Predict the Growth of Knowledge",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/It’s Impossible to Predict the Growth of Knowledge.html",
      },
      {
        id: "node85",
        label: "Node 85",
        previewText: "It’s Rare to Have Competing, Viable, Scientific Theories",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/It’s Rare to Have Competing, Viable, Scientific Theories.html",
      },
      {
        id: "node86",
        label: "Node 86",
        previewText: "Make Bold Guesses and Weed Out the Failures",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Make Bold Guesses and Weed Out the Failures.html",
      },
      {
        id: "node87",
        label: "Node 87",
        previewText: "Nullius in Verba",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Nullius in Verba.html",
      },
      {
        id: "node88",
        label: "Node 88",
        previewText: "People Are a Force of Nature",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/People Are a Force of Nature.html",
      },
      {
        id: "node89",
        label: "Node 89",
        previewText: "Pessimism Seems Like an Intellectually Serious Position",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Pessimism Seems Like an Intellectually Serious Position.html",
      },
      {
        id: "node90",
        label: "Node 90",
        previewText: "Probability Is Subjective",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Probability Is Subjective.html",
      },
      {
        id: "node91",
        label: "Node 91",
        previewText: "Rational Optimism Is the Way Out",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Rational Optimism Is the Way Out.html",
      },
      {
        id: "node92",
        label: "Node 92",
        previewText: "Read the Best 100 Books Over and Over Again",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Read the Best 100 Books Over and Over Again.html",
      },
      {
        id: "node93",
        label: "Node 93",
        previewText: "Science Advances One Funeral at a Time",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Science Advances One Funeral at a Time.html",
      },
      {
        id: "node94",
        label: "Node 94",
        previewText: "Science Expands Our Vision of Reality",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Science Expands Our Vision of Reality.html.html",
      },
      {
        id: "node95",
        label: "Node 95",
        previewText: "Science Is an Error-Correcting Mechanism",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Science Is an Error-Correcting Mechanism.html",
      },
      {
        id: "node96",
        label: "Node 96",
        previewText: "Science Is the Engine That Pulls Humanity Forward",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Science Is the Engine That Pulls Humanity Forward.html",
      },
      {
        id: "node97",
        label: "Node 97",
        previewText: "The Beginning of Infinity",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/The Beginning of Infinity.html",
      },
      {
        id: "node98",
        label: "Node 98",
        previewText: "The Methods of Mathematics Are Fallible",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/The Methods of Mathematics Are Fallible.html",
      },
      {
        id: "node99",
        label: "Node 99",
        previewText: "The Multiverse",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/The Multiverse.html",
      },
      {
        id: "node100",
        label: "Node 100",
        previewText: "Theories Are Explanations, Not Predictions",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/Theories Are Explanations, Not Predictions.html",
      },
      {
        id: "node101",
        label: "Node 101",
        previewText: "There Is No End of Science",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/There Is No End of Science.html",
      },
      {
        id: "node102",
        label: "Node 102",
        previewText: "There Is No Settled Mathematics",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/There Is No Settled Mathematics.html",
      },
      {
        id: "node103",
        label: "Node 103",
        previewText: "We Can’t Prove Most Theorems with Known Physics",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/We Can’t Prove Most Theorems with Known Physics.html",
      },
      {
        id: "node104",
        label: "Node 104",
        previewText: "We Explain the Seen in Terms of the Unseen",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/We Explain the Seen in Terms of the Unseen.html",
      },
      {
        id: "node105",
        label: "Node 105",
        previewText: "We’re All Equal in Our Infinite Ignorance",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/We’re All Equal in Our Infinite Ignorance.html",
      },
      {
        id: "node106",
        label: "Node 106",
        previewText: "We’re at the Beginning of an Infinity of Knowledge",
        content: "<p>Content for Node 3</p>",
        url: "BeginningToInfinity/We’re at the Beginning of an Infinity of Knowledge.html",
      },

      {
        id: "node_108",
        label: "Node 108",
        previewText: "A Founder\u2019s Anxiety",
        url: "A Founder\u2019s Anxiety.html",
      },
      {
        id: "node_109",
        label: "Node 109",
        previewText: "Be Chaotic Neutral",
        url: "Be Chaotic Neutral.html",
      },
      {
        id: "node_110",
        label: "Node 110",
        previewText: "Bill Burnham on the future of Google Base",
        url: "Bill Burnham on the future of Google Base.html",
      },
      {
        id: "node_111",
        label: "Node 111",
        previewText: "Bubble",
        url: "Bubble.html",
      },
      {
        id: "node_112",
        label: "Node 112",
        previewText: "Classifieds",
        url: "Classifieds.html",
      },
      {
        id: "node_113",
        label: "Node 113",
        previewText: "Craigslist is Worth More than EBay",
        url: "Craigslist is Worth More than EBay.html",
      },
      {
        id: "node_114",
        label: "Node 114",
        previewText: "Craigslist takes on Sand Hill Road",
        url: "Craigslist takes on Sand Hill Road.html",
      },
      {
        id: "node_115",
        label: "Node 115",
        previewText: "Do Animals Laugh",
        url: "Do Animals Laugh.html",
      },
      {
        id: "node_116",
        label: "Node 116",
        previewText: "Envy Can Be Useful, or It Can Eat You Alive",
        url: "Envy Can Be Useful, or It Can Eat You Alive.html",
      },
      {
        id: "node_117",
        label: "Node 117",
        previewText: "How to Angel Invest, Part 1",
        url: "How to Angel Invest, Part 1.html",
      },
      {
        id: "node_118",
        label: "Node 118",
        previewText: "How to Angel Invest, Part 2",
        url: "How to Angel Invest, Part 2.html",
      },
      {
        id: "node_119",
        label: "Node 119",
        previewText: "Introducing Venture Hacks",
        url: "Introducing Venture Hacks.html",
      },
      {
        id: "node_120",
        label: "Node 120",
        previewText: "Isn\u2019t it obvious what Web 2.0 is",
        url: "Isn\u2019t it obvious what Web 2.0 is.html",
      },
      {
        id: "node_121",
        label: "Node 121",
        previewText: "Kapil Gupta Conquering the Mind",
        url: "Kapil Gupta Conquering the Mind.html",
      },
      {
        id: "node_122",
        label: "Node 122",
        previewText: "Lawyers or Insurance Salesmen",
        url: "Lawyers or Insurance Salesmen.html",
      },
      {
        id: "node_123",
        label: "Node 123",
        previewText: "Life Formulas I",
        url: "Life Formulas I.html",
      },
      {
        id: "node_124",
        label: "Node 124",
        previewText: "Matt Ridley How Innovation Works, Part 1",
        url: "Matt Ridley How Innovation Works, Part 1.html",
      },
      {
        id: "node_125",
        label: "Node 125",
        previewText: "Matt Ridley How Innovation Works, Part 2",
        url: "Matt Ridley How Innovation Works, Part 2.html",
      },
      {
        id: "node_126",
        label: "Node 126",
        previewText: "Natural Beauty",
        url: "Natural Beauty.html",
      },
      {
        id: "node_127",
        label: "Node 127",
        previewText: "New year, new blog",
        url: "New year, new blog.html",
      },
      {
        id: "node_128",
        label: "Node 128",
        previewText: "On Humility",
        url: "On Humility.html",
      },
      {
        id: "node_129",
        label: "Node 129",
        previewText: "On Meditation",
        url: "On Meditation.html",
      },
      {
        id: "node_130",
        label: "Node 130",
        previewText: "Principal-Agent Problem Act Like an Owner",
        url: "Principal-Agent Problem Act Like an Owner.html",
      },
      {
        id: "node_131",
        label: "Node 131",
        previewText: "Read the Best 100 Books Over and Over Again",
        url: "Read the Best 100 Books Over and Over Again.html",
      },
      {
        id: "node_132",
        label: "Node 132",
        previewText: "Reject Most Advice",
        url: "Reject Most Advice.html",
      },
      {
        id: "node_133",
        label: "Node 133",
        previewText: "STIRR discovers Price Discrimination",
        url: "STIRR discovers Price Discrimination.html",
      },
      {
        id: "node_134",
        label: "Node 134",
        previewText: "The 80-hour Myth",
        url: "The 80-hour Myth.html",
      },
      {
        id: "node_135",
        label: "Node 135",
        previewText: "The Box",
        url: "The Box.html",
      },
      {
        id: "node_136",
        label: "Node 136",
        previewText: "The Need for Indifference",
        url: "The Need for Indifference.html",
      },
      {
        id: "node_137",
        label: "Node 137",
        previewText: "The Unbundling of the Venture Capital Industry",
        url: "The Unbundling of the Venture Capital Industry.html",
      },
      {
        id: "node_138",
        label: "Node 138",
        previewText: "The truth about hard work",
        url: "The truth about hard work.html",
      },
      {
        id: "node_139",
        label: "Node 139",
        previewText: "There is No Angel Bubble. There are Many Angel Bubbles.",
        url: "There is No Angel Bubble. There are Many Angel Bubbles..html",
      },
      {
        id: "node_140",
        label: "Node 140",
        previewText: "Two More Hacks",
        url: "Two More Hacks.html",
      },
      {
        id: "node_141",
        label: "Node 141",
        previewText: "Unquantifiable Risk",
        url: "Unquantifiable Risk.html",
      },
      {
        id: "node_142",
        label: "Node 142",
        previewText: "VC Bundling",
        url: "VC Bundling.html",
      },
      {
        id: "node_143",
        label: "Node 143",
        previewText: "Vast.com launches Credit Card Search!",
        url: "Vast.com launches Credit Card Search!.html",
      },
      {
        id: "node_144",
        label: "Node 144",
        previewText: "We Should All Be Working for Ourselves",
        url: "We Should All Be Working for Ourselves.html",
      },
      {
        id: "node_145",
        label: "Node 145",
        previewText: "Web 2.0 + Web 2.0 = Web 3.0",
        url: "Web 2.0 + Web 2.0 = Web 3.0.html",
      },
      {
        id: "node_146",
        label: "Node 146",
        previewText: "Who has time for meetings",
        url: "Who has time for meetings.html",
      },
      {
        id: "node_147",
        label: "Node 147",
        previewText: "Why (Private) Investors are Herd Animals",
        url: "Why (Private) Investors are Herd Animals.html",
      },
      {
        id: "node_148",
        label: "Node 148",
        previewText: "Why We May Think",
        url: "Why We May Think.html",
      },
      {
        id: "node_149",
        label: "Node 149",
        previewText: "Yes, the bubble is back",
        url: "Yes, the bubble is back.html",
      },
    ],
    edges: [
      // ... your edges ...
      { source: "node8", target: "node1" },
      { source: "node8", target: "node2" },
      { source: "node8", target: "node3" },
      { source: "node8", target: "node4" },
      { source: "node8", target: "node5" },
      { source: "node8", target: "node6" },
      { source: "node8", target: "node7" },
      { source: "node8", target: "node9" },
      { source: "node8", target: "node10" },
      { source: "node8", target: "node11" },
      { source: "node8", target: "node12" },
      { source: "node8", target: "node13" },
      { source: "node8", target: "node14" },
      { source: "node8", target: "node15" },
      { source: "node8", target: "node16" },
      { source: "node8", target: "node17" },
      { source: "node8", target: "node18" },
      { source: "node8", target: "node19" },
      { source: "node8", target: "node20" },
      { source: "node8", target: "node21" },
      { source: "node8", target: "node22" },
      { source: "node8", target: "node23" },
      { source: "node8", target: "node24" },
      { source: "node8", target: "node25" },
      { source: "node8", target: "node26" },
      { source: "node8", target: "node27" },
      { source: "node8", target: "node28" },
      { source: "node8", target: "node29" },
      { source: "node8", target: "node30" },
      { source: "node8", target: "node31" },
      { source: "node8", target: "node32" },
      { source: "node8", target: "node33" },
      { source: "node8", target: "node34" },
      { source: "node8", target: "node35" },
      { source: "node8", target: "node36" },
      { source: "node8", target: "node37" },
      { source: "node8", target: "node38" },
      { source: "node8", target: "node39" },
      { source: "node8", target: "node40" },
      { source: "node8", target: "node41" },
      { source: "node8", target: "node42" },
      { source: "node8", target: "node43" },
      { source: "node8", target: "node44" },
      { source: "node8", target: "node45" },
      { source: "node8", target: "node46" },
      { source: "node8", target: "node47" },
      { source: "node8", target: "node48" },
      { source: "node8", target: "node49" },
      { source: "node8", target: "node50" },
      { source: "node8", target: "node51" },
      { source: "node8", target: "node52" },
      { source: "node8", target: "node53" },
      { source: "node55", target: "node54" },
      { source: "node55", target: "node56" },
      { source: "node55", target: "node57" },
      { source: "node55", target: "node58" },
      { source: "node55", target: "node59" },
      { source: "node55", target: "node60" },
      { source: "node55", target: "node61" },
      { source: "node55", target: "node62" },
      { source: "node55", target: "node63" },
      { source: "node55", target: "node64" },
      { source: "node55", target: "node65" },
      { source: "node55", target: "node66" },
      { source: "node55", target: "node67" },
      { source: "node55", target: "node68" },
      { source: "node55", target: "node69" },
      { source: "node55", target: "node70" },
      { source: "node55", target: "node71" },
      { source: "node74", target: "node73" },
      { source: "node74", target: "node75" },
      { source: "node74", target: "node76" },
      { source: "node74", target: "node77" },
      { source: "node74", target: "node78" },
      { source: "node74", target: "node79" },
      { source: "node74", target: "node80" },
      { source: "node74", target: "node81" },
      { source: "node74", target: "node83" },
      { source: "node74", target: "node84" },
      { source: "node74", target: "node85" },
      { source: "node74", target: "node86" },
      { source: "node74", target: "node87" },
      { source: "node74", target: "node88" },
      { source: "node74", target: "node89" },
      { source: "node74", target: "node90" },
      { source: "node74", target: "node91" },
      { source: "node74", target: "node92" },
      { source: "node74", target: "node93" },
      { source: "node74", target: "node94" },
      { source: "node74", target: "node95" },
      { source: "node74", target: "node96" },
      { source: "node74", target: "node97" },
      { source: "node74", target: "node98" },
      { source: "node74", target: "node99" },
      { source: "node74", target: "node100" },
      { source: "node74", target: "node101" },
      { source: "node74", target: "node102" },
      { source: "node74", target: "node103" },
      { source: "node74", target: "node104" },
      { source: "node74", target: "node105" },
      { source: "node74", target: "node106" },
    ],
  };

  console.log("Graph data:", graphData);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const radius = Math.min(width, height) * 0.5; // Adjust the radius as needed

  const centerX = width / 2;
  const centerY = height / 2;

  const simulation = d3
    .forceSimulation(graphData.nodes)
    .force(
      "link",
      d3.forceLink(graphData.edges).id((d) => d.id)
    )
    .force("charge", d3.forceManyBody().strength(-50)) // Increase the strength to make nodes attract each other
    .force("center", d3.forceCenter(centerX, centerY)) // Updated this line
    .force("collision", d3.forceCollide().radius(30)) // Adjust the radius as needed
    .alpha(0.001) // Set a low initial alpha value
    .alphaDecay(0) // Set a low alphaDecay value

    .on("tick", ticked);

  console.log("Simulation created:", simulation);

  const svg = d3
    .select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("stroke", "white"); // Change edge color here;

  const link = svg
    .selectAll("line")
    .data(graphData.edges)
    .enter()
    .append("line");

  console.log("Links created:", link);

  const node = svg
    .selectAll("circle")
    .data(graphData.nodes)
    .enter()
    .append("circle")
    .attr("r", 10)
    .attr("fill", "steelblue")
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    )
    .on("mouseover", showTooltip)
    .on("mouseout", hideTooltip)
    .on("click", openNodeContent);

  console.log("Nodes created:", node);

  const tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node;
    node
      .attr(
        "cx",
        (d) =>
          (d.x = Math.max(centerX - radius, Math.min(centerX + radius, d.x)))
      )
      .attr(
        "cy",
        (d) =>
          (d.y = Math.max(centerY - radius, Math.min(centerY + radius, d.y)))
      );
  }

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  function showTooltip(event, d) {
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip
      .html(d.previewText)
      .style("left", event.pageX + "px")
      .style("top", event.pageY + "px");
  }

  function hideTooltip() {
    tooltip.transition().duration(500).style("opacity", 0);
  }

  function openNodeContent(event, d) {
    if (d.url) {
      window.open(d.url, "_blank");
    }
  }
});
