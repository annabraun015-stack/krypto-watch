import { H as createVNode, d as Fragment, _ as __astro_tag_component__ } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bitcoin 21 Millionen Limit: Warum es niemals mehr geben wird",
  "description": "Erfahren Sie, warum Bitcoins Angebot auf 21 Millionen begrenzt ist, wie Satoshi Nakamoto diese Knappheit programmierte und was passiert, wenn alle BTC gemined sind.",
  "date": "2026-04-17T00:00:00.000Z",
  "author": "KryptoWatch Redaktion",
  "category": "bitcoin",
  "tags": ["bitcoin angebot", "21 millionen", "btc", "knappheit", "halving", "digitales gold", "geldpolitik"],
  "image": "/images/blog/bitcoin-supply.png",
  "imageAlt": "Bitcoin 21 Millionen Limit — Goldener Tresor mit Visualisierung der Knappheit",
  "coinSymbols": ["BTC"],
  "readingTime": 10,
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
    "slug": "das-21-millionen-limit-bitcoins-wichtigste-eigenschaft",
    "text": "Das 21-Millionen-Limit: Bitcoins wichtigste Eigenschaft"
  }, {
    "depth": 2,
    "slug": "wie-satoshi-nakamoto-knappheit-erschuf",
    "text": "Wie Satoshi Nakamoto Knappheit erschuf"
  }, {
    "depth": 2,
    "slug": "verlorene-bitcoins-das-reale-angebot",
    "text": "Verlorene Bitcoins: Das reale Angebot"
  }, {
    "depth": 2,
    "slug": "satoshis-die-teilbarkeit-von-bitcoin",
    "text": "Satoshis: Die Teilbarkeit von Bitcoin"
  }, {
    "depth": 2,
    "slug": "was-passiert-wenn-alle-bitcoins-gemined-sind",
    "text": "Was passiert, wenn alle Bitcoins gemined sind?"
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
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
          href: "#21-million",
          children: "Das 21-Millionen-Limit: Bitcoins wichtigste Eigenschaft"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#how-engineered",
          children: "Wie Satoshi Nakamoto Knappheit erschuf"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#current-supply",
          children: "Aktueller Stand des Bitcoin-Angebots"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#lost-bitcoin",
          children: "Verlorene Bitcoins: Das reale Angebot"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#satoshis",
          children: "Satoshis: Die Teilbarkeit von Bitcoin"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#math",
          children: "Warum genau 21 Millionen? Die Mathematik dahinter"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#after-mining",
          children: "Was passiert, wenn alle Bitcoins gemined sind?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#vs-gold",
          children: "Bitcoin vs. Gold: Knappheit im Vergleich"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#faqs",
          children: "Häufig gestellte Fragen (FAQs)"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "das-21-millionen-limit-bitcoins-wichtigste-eigenschaft",
      children: "Das 21-Millionen-Limit: Bitcoins wichtigste Eigenschaft"
    }), "\n", createVNode(_components.p, {
      children: ["Es wird niemals mehr als ", createVNode(_components.strong, {
        children: "21 Millionen Bitcoins"
      }), " geben. Das ist keine leere Versprechung, sondern eine mathematische Gewissheit, die durch den Code und tausende ", createVNode(_components.a, {
        href: "/blog/was-ist-ein-bitcoin-node/",
        children: "Full Nodes"
      }), " weltweit durchgesetzt wird."]
    }), "\n", createVNode(_components.p, {
      children: ["In einer Welt, in der Zentralbanken unbegrenzt Geld drucken können, bietet Bitcoin eine einzigartige Eigenschaft: ", createVNode(_components.strong, {
        children: "absolute Knappheit"
      }), "."]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Featured Snippet Antwort:"
        }), " Das maximale Angebot von Bitcoin ist auf exakt 21 Millionen BTC begrenzt. Neue Bitcoins entstehen nur durch Mining-Belohnungen, die sich alle 4 Jahre (Halving) reduzieren. Bis April 2026 wurden bereits ca. 19,7 Millionen BTC gemined. Der letzte Bitcoin wird voraussichtlich im Jahr 2140 erzeugt."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "wie-satoshi-nakamoto-knappheit-erschuf",
      children: "Wie Satoshi Nakamoto Knappheit erschuf"
    }), "\n", createVNode(_components.p, {
      children: ["Das Limit wird durch das Belohnungssystem und den ", createVNode(_components.a, {
        href: "/blog/bitcoin-halving/",
        children: "Halving-Zeitplan"
      }), " gesteuert:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Phase 1 (2009-2012)"
        }), ": 50 BTC pro Block"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Phase 2 (2012-2016)"
        }), ": 25 BTC pro Block"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Phase 3 (2016-2020)"
        }), ": 12,5 BTC pro Block"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Phase 4 (2020-2024)"
        }), ": 6,25 BTC pro Block"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Phase 5 (2024-2028)"
        }), ": 3,125 BTC pro Block"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Dies ist eine geometrische Reihe, deren Summe mathematisch bei 21 Millionen konvergiert."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "verlorene-bitcoins-das-reale-angebot",
      children: "Verlorene Bitcoins: Das reale Angebot"
    }), "\n", createVNode(_components.p, {
      children: ["Obwohl es 21 Millionen BTC geben wird, sind viele bereits für immer verloren. Experten schätzen, dass ", createVNode(_components.strong, {
        children: "3 bis 4 Millionen Bitcoin"
      }), " nicht mehr zugänglich sind, weil:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Festplatten in den frühen Tagen weggeworfen wurden."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/blog/public-private-keys/",
          children: "Private Keys"
        }), " verloren gingen."]
      }), "\n", createVNode(_components.li, {
        children: "Personen verstarben, ohne ihr Wallet-Passwort zu hinterlassen."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Das bedeutet, das reale Angebot ist mit ca. ", createVNode(_components.strong, {
        children: "17 Millionen BTC"
      }), " noch weitaus knapper als ursprünglich gedacht."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "satoshis-die-teilbarkeit-von-bitcoin",
      children: "Satoshis: Die Teilbarkeit von Bitcoin"
    }), "\n", createVNode(_components.p, {
      children: "Man muss keinen ganzen Bitcoin kaufen. Jeder Bitcoin ist in 100 Millionen kleine Einheiten unterteilt:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1 BTC"
        }), " = 100.000.000 Satoshis"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "1 Satoshi"
        }), " = 0,00000001 BTC"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Damit gibt es insgesamt 2,1 Billiarden (2.100.000.000.000.000) Satoshis – genug für die gesamte Weltbevölkerung, selbst wenn Bitcoin Weltreservewährung würde."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "was-passiert-wenn-alle-bitcoins-gemined-sind",
      children: "Was passiert, wenn alle Bitcoins gemined sind?"
    }), "\n", createVNode(_components.p, {
      children: ["Um das Jahr ", createVNode(_components.strong, {
        children: "2140"
      }), " wird der letzte Satoshi gemined. Ab diesem Zeitpunkt erhalten Miner keine neuen BTC mehr, sondern werden ausschließlich durch die ", createVNode(_components.a, {
        href: "/blog/bitcoin-transaktionsgebuehren/",
        children: "Transaktionsgebühren"
      }), " bezahlt. Das Netzwerk bleibt also auch nach 2140 sicher."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "indexierungssignale",
      children: "Indexierungssignale"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Slug:"
      }), " ", createVNode(_components.code, {
        children: "/blog/bitcoin-21-millionen-limit/"
      }), "\n", createVNode(_components.strong, {
        children: "Sitemap Priorität:"
      }), " 0.85\n", createVNode(_components.strong, {
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
          href: "/blog/bitcoin-halving/",
          children: "Bitcoin Halving"
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
          href: "/blog/bitcoin-vs-fiat-geld/",
          children: "Bitcoin vs. Fiat-Geld"
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

const url = "src/content/blog/de/bitcoin-21-millionen-limit.mdx";
const file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/de/bitcoin-21-millionen-limit.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/de/bitcoin-21-millionen-limit.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
