import { H as createVNode, d as Fragment, _ as __astro_tag_component__ } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const frontmatter = {
  "title": "Was ist das Bitcoin Halving? Alles was Sie wissen müssen (2024 & 2028)",
  "description": "Verstehen Sie, was das Bitcoin Halving ist, warum es alle 4 Jahre passiert und wie es Angebot und Preis beeinflusst. Alles zum Halving 2024 und dem Ausblick auf 2028.",
  "date": "2026-04-17T00:00:00.000Z",
  "author": "KryptoWatch Redaktion",
  "category": "bitcoin",
  "tags": ["bitcoin halving", "btc", "block reward", "knappheit", "angebot", "2024 halving"],
  "image": "/images/blog/bitcoin-halving.png",
  "imageAlt": "Bitcoin Halving — Digitale Uhr und ein Bitcoin-Icon, das durch Energiewellen geteilt wird",
  "coinSymbols": ["BTC"],
  "readingTime": 11,
  "featured": false,
  "locale": "de"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "inhaltsverzeichnis",
    "text": "Inhaltsverzeichnis"
  }, {
    "depth": 2,
    "slug": "was-ist-das-bitcoin-halving",
    "text": "Was ist das Bitcoin Halving?"
  }, {
    "depth": 2,
    "slug": "die-geschichte-der-halvings-20092028",
    "text": "Die Geschichte der Halvings: 2009–2028"
  }, {
    "depth": 2,
    "slug": "warum-gibt-es-das-halving",
    "text": "Warum gibt es das Halving?"
  }, {
    "depth": 2,
    "slug": "das-bitcoin-halving-2024-ein-rückblick",
    "text": "Das Bitcoin Halving 2024: Ein Rückblick"
  }, {
    "depth": 2,
    "slug": "wie-das-halving-den-preis-beeinflusst",
    "text": "Wie das Halving den Preis beeinflusst"
  }, {
    "depth": 3,
    "slug": "preisentwicklung-nach-den-halvings",
    "text": "Preisentwicklung nach den Halvings"
  }, {
    "depth": 2,
    "slug": "das-stock-to-flow-modell-erklärt",
    "text": "Das Stock-to-Flow-Modell erklärt"
  }, {
    "depth": 2,
    "slug": "was-passiert-wenn-alle-bitcoins-gemined-sind",
    "text": "Was passiert, wenn alle Bitcoins gemined sind?"
  }, {
    "depth": 2,
    "slug": "halving-2028-was-uns-erwartet",
    "text": "Halving 2028: Was uns erwartet"
  }, {
    "depth": 2,
    "slug": "häufig-gestellte-fragen-faqs",
    "text": "Häufig gestellte Fragen (FAQs)"
  }, {
    "depth": 3,
    "slug": "wie-oft-findet-das-halving-statt",
    "text": "Wie oft findet das Halving statt?"
  }, {
    "depth": 3,
    "slug": "steigt-der-preis-nach-jedem-halving",
    "text": "Steigt der Preis nach jedem Halving?"
  }, {
    "depth": 2,
    "slug": "indexierungssignale",
    "text": "Indexierungssignale"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "inhaltsverzeichnis",
      children: "Inhaltsverzeichnis"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#definition",
          children: "Was ist das Bitcoin Halving?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#history",
          children: "Die Geschichte der Halvings: 2009–2028"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#why",
          children: "Warum gibt es das Halving?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#2024-halving",
          children: "Das Bitcoin Halving 2024: Ein Rückblick"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#price-impact",
          children: "Wie das Halving den Preis beeinflusst"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#s2f",
          children: "Das Stock-to-Flow-Modell erklärt"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#last-bitcoin",
          children: "Was passiert, wenn alle Bitcoins gemined sind?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#mining-economics",
          children: "Mining-Profitabilität nach dem Halving"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#2028",
          children: "Halving 2028: Was uns erwartet"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#faqs",
          children: "Häufig gestellte Fragen (FAQs)"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "was-ist-das-bitcoin-halving",
      children: "Was ist das Bitcoin Halving?"
    }), "\n", createVNode(_components.p, {
      children: ["Das ", createVNode(_components.strong, {
        children: "Bitcoin Halving"
      }), " ist ein fest im Bitcoin-Protokoll kodiertes Ereignis, das die Belohnung für Miner (den Block Reward) genau um die Hälfte reduziert. Dies geschieht alle ", createVNode(_components.strong, {
        children: "210.000 Blöcke"
      }), ", was in etwa einem Zeitraum von 4 Jahren entspricht."]
    }), "\n", createVNode(_components.p, {
      children: "Es ist einer der wichtigsten Mechanismen der Geldpolitik von Bitcoin. Es stellt sicher, dass neue BTC mit einer vorhersehbaren, abnehmenden Rate in den Umlauf kommen, bis das maximale Angebot von 21 Millionen erreicht ist."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Featured Snippet Antwort:"
        }), " Das Bitcoin Halving ist ein programmiertes Ereignis, das die Belohnung für Bitcoin-Miner alle 210.000 Blöcke (~4 Jahre) um 50 % reduziert. Es kontrolliert die Inflation von Bitcoin und sorgt dafür, dass BTC mit der Zeit immer knapper wird. Das letzte Halving fand im April 2024 statt und senkte die Belohnung von 6,25 auf 3,125 BTC."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Das Halving ist der Kernfaktor dafür, ", createVNode(_components.a, {
        href: "/blog/bitcoin-21-millionen-limit/",
        children: "warum das Angebot auf 21 Millionen begrenzt ist"
      }), " und ein wesentlicher Treiber der ", createVNode(_components.a, {
        href: "/blog/was-bestimmt-den-bitcoin-preis/",
        children: "Preisbildung"
      }), "."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "die-geschichte-der-halvings-20092028",
      children: "Die Geschichte der Halvings: 2009–2028"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Ereignis"
          }), createVNode(_components.th, {
            children: "Datum"
          }), createVNode(_components.th, {
            children: "Blockhöhe"
          }), createVNode(_components.th, {
            children: "Belohnung (Reward)"
          }), createVNode(_components.th, {
            children: "Angebot im Umlauf"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Genesis Block"
          }), createVNode(_components.td, {
            children: "Jan 2009"
          }), createVNode(_components.td, {
            children: "0"
          }), createVNode(_components.td, {
            children: "50 BTC"
          }), createVNode(_components.td, {
            children: "~0 BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1. Halving"
          }), createVNode(_components.td, {
            children: "Nov 2012"
          }), createVNode(_components.td, {
            children: "210.000"
          }), createVNode(_components.td, {
            children: "25 BTC"
          }), createVNode(_components.td, {
            children: "~10.5M BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2. Halving"
          }), createVNode(_components.td, {
            children: "Juli 2016"
          }), createVNode(_components.td, {
            children: "420.000"
          }), createVNode(_components.td, {
            children: "12,5 BTC"
          }), createVNode(_components.td, {
            children: "~15.75M BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "3. Halving"
          }), createVNode(_components.td, {
            children: "Mai 2020"
          }), createVNode(_components.td, {
            children: "630.000"
          }), createVNode(_components.td, {
            children: "6,25 BTC"
          }), createVNode(_components.td, {
            children: "~18.37M BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "4. Halving"
          }), createVNode(_components.td, {
            children: "April 2024"
          }), createVNode(_components.td, {
            children: "840.000"
          }), createVNode(_components.td, {
            children: "3,125 BTC"
          }), createVNode(_components.td, {
            children: "~19.7M BTC"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "5. Halving (Prognose)"
          }), createVNode(_components.td, {
            children: "~ April 2028"
          }), createVNode(_components.td, {
            children: "1.050.000"
          }), createVNode(_components.td, {
            children: "1,5625 BTC"
          }), createVNode(_components.td, {
            children: "~20.3M BTC"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Bis heute (2026) sind bereits über ", createVNode(_components.strong, {
        children: "93 % aller Bitcoins"
      }), " gemined. Die restlichen 1,3 Millionen BTC werden über die nächsten 114 Jahre verteilt ausgegeben."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "warum-gibt-es-das-halving",
      children: "Warum gibt es das Halving?"
    }), "\n", createVNode(_components.p, {
      children: ["Satoshi Nakamoto entwarf den Halving-Zeitplan, um eine ", createVNode(_components.strong, {
        children: "programmatische Knappheit"
      }), " zu schaffen – eine disinflationäre Ausgaberate, die niemals manipuliert werden kann. Im Gegensatz zu Fiat-Währungen, bei denen Zentralbanken unbegrenzt Geld drucken können, macht das Halving Bitcoin zum “härtesten” Geld, das je erschaffen wurde."]
    }), "\n", createVNode(_components.p, {
      children: ["Dies wird im Detail in unserem Vergleich ", createVNode(_components.a, {
        href: "/blog/bitcoin-vs-fiat-geld/",
        children: "Bitcoin vs. Fiat-Geld"
      }), " erläutert."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "das-bitcoin-halving-2024-ein-rückblick",
      children: "Das Bitcoin Halving 2024: Ein Rückblick"
    }), "\n", createVNode(_components.p, {
      children: ["Das ", createVNode(_components.strong, {
        children: "4. Bitcoin Halving"
      }), " fand am ", createVNode(_components.strong, {
        children: "19. April 2024"
      }), " bei Block 840.000 statt."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Die Belohnung sank von ", createVNode(_components.strong, {
          children: "6,25 BTC auf 3,125 BTC"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: "Das tägliche neue Angebot sank von ca. 900 BTC auf ca. 450 BTC."
      }), "\n", createVNode(_components.li, {
        children: ["Der Preis lag zum Zeitpunkt des Halvings bei etwa ", createVNode(_components.strong, {
          children: "63.800 USD"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Besonders war 2024 die enorme Nachfrage durch die ", createVNode(_components.strong, {
        children: "Bitcoin Spot ETFs"
      }), " (wie die von BlackRock), die bereits vor dem Halving mehr BTC kauften, als täglich produziert wurden."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "wie-das-halving-den-preis-beeinflusst",
      children: "Wie das Halving den Preis beeinflusst"
    }), "\n", createVNode(_components.p, {
      children: "Historisch gesehen gingen Halvings immer mit massiven Preissteigerungen einher (Zeitverzögerung ca. 12-18 Monate), da das Angebot sinkt, während die Nachfrage gleich bleibt oder steigt."
    }), "\n", createVNode(_components.h3, {
      id: "preisentwicklung-nach-den-halvings",
      children: "Preisentwicklung nach den Halvings"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Halving"
          }), createVNode(_components.th, {
            children: "Preis zum Halving"
          }), createVNode(_components.th, {
            children: "Hoch nach 12-18 Monaten"
          }), createVNode(_components.th, {
            children: "Rendite"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2012"
          }), createVNode(_components.td, {
            children: "~$12"
          }), createVNode(_components.td, {
            children: "$1.100"
          }), createVNode(_components.td, {
            children: "+9.066%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2016"
          }), createVNode(_components.td, {
            children: "~$650"
          }), createVNode(_components.td, {
            children: "$20.000"
          }), createVNode(_components.td, {
            children: "+2.977%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2020"
          }), createVNode(_components.td, {
            children: "~$8.600"
          }), createVNode(_components.td, {
            children: "$69.000"
          }), createVNode(_components.td, {
            children: "+702%"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "2024"
          }), createVNode(_components.td, {
            children: "~$63.800"
          }), createVNode(_components.td, {
            children: "$108.000+"
          }), createVNode(_components.td, {
            children: "+69%+ (laufend)"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "das-stock-to-flow-modell-erklärt",
      children: "Das Stock-to-Flow-Modell erklärt"
    }), "\n", createVNode(_components.p, {
      children: ["Das ", createVNode(_components.strong, {
        children: "Stock-to-Flow-Modell"
      }), " misst die Knappheit, indem es den gesamten Bestand (Stock) durch die jährliche Produktion (Flow) teilt. Seit dem Halving 2024 hat Bitcoin eine höhere S2F-Rate als Gold, was es mathematisch zum knappsten Asset der Welt macht."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "was-passiert-wenn-alle-bitcoins-gemined-sind",
      children: "Was passiert, wenn alle Bitcoins gemined sind?"
    }), "\n", createVNode(_components.p, {
      children: ["Etwa im Jahr ", createVNode(_components.strong, {
        children: "2140"
      }), " wird der letzte Satoshi gemined. Danach werden Miner ausschließlich durch ", createVNode(_components.strong, {
        children: "Transaktionsgebühren"
      }), " belohnt. Ein funktionierender ", createVNode(_components.a, {
        href: "/blog/bitcoin-transaktionsgebuehren/",
        children: "Gebührenmarkt"
      }), " ist daher für die langfristige Sicherheit des Netzwerks entscheidend."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "halving-2028-was-uns-erwartet",
      children: "Halving 2028: Was uns erwartet"
    }), "\n", createVNode(_components.p, {
      children: ["Das ", createVNode(_components.strong, {
        children: "5. Bitcoin Halving"
      }), " wird für ", createVNode(_components.strong, {
        children: "April 2028"
      }), " erwartet."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Die Belohnung sinkt auf ", createVNode(_components.strong, {
          children: "1,5625 BTC"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Die jährliche Inflationsrate von Bitcoin wird dann unter ", createVNode(_components.strong, {
          children: "0,8 %"
        }), " fallen – weit weniger als das Inflationsziel der meisten Zentralbanken."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "häufig-gestellte-fragen-faqs",
      children: "Häufig gestellte Fragen (FAQs)"
    }), "\n", createVNode(_components.h3, {
      id: "wie-oft-findet-das-halving-statt",
      children: "Wie oft findet das Halving statt?"
    }), "\n", createVNode(_components.p, {
      children: "Alle 210.000 Blöcke (ca. alle 4 Jahre)."
    }), "\n", createVNode(_components.h3, {
      id: "steigt-der-preis-nach-jedem-halving",
      children: "Steigt der Preis nach jedem Halving?"
    }), "\n", createVNode(_components.p, {
      children: "Bisher war dies immer der Fall, aber es ist keine Garantie für die Zukunft. Das Halving reduziert lediglich das Angebot."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "indexierungssignale",
      children: "Indexierungssignale"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Slug:"
      }), " ", createVNode(_components.code, {
        children: "/blog/bitcoin-halving/"
      }), "\n", createVNode(_components.strong, {
        children: "Sitemap Priorität:"
      }), " 0.9\n", createVNode(_components.strong, {
        children: "Interne Verlinkungsempfehlungen:"
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/was-ist-bitcoin/",
          children: "Was ist Bitcoin?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/bitcoin-21-millionen-limit/",
          children: "Bitcoin 21 Millionen Limit"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/bitcoin-mining-erklaert/",
          children: "Bitcoin Mining erklärt"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/was-bestimmt-den-bitcoin-preis/",
          children: "Was bestimmt den Bitcoin-Preis?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/blog/bitcoin-transaktionsgebuehren/",
          children: "Bitcoin Transaktionsgebühren"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/de/bitcoin-halving.mdx";
const file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/de/bitcoin-halving.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/de/bitcoin-halving.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
