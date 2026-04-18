import { H as createVNode, d as Fragment, _ as __astro_tag_component__ } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const frontmatter = {
  "title": "DeFi-Sicherheit 2025: Die wichtigsten Protokoll-Hacks und Lektionen",
  "description": "Über $2 Milliarden gingen 2024 durch DeFi-Hacks verloren. Wir analysieren die häufigsten Angriffsvektoren und wie Anleger sich schützen können.",
  "date": "2025-01-05T00:00:00.000Z",
  "author": "KryptoWatch Redaktion",
  "category": "defi",
  "tags": ["defi", "sicherheit", "hacks", "smart-contracts"],
  "image": "/images/blog/defi-security.jpg",
  "imageAlt": "DeFi Sicherheit und Hack-Schutz",
  "coinSymbols": ["ETH", "USDC", "USDT"],
  "readingTime": 9,
  "featured": false,
  "locale": "de"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "defi-hacks-2024-lehren-für-2025",
    "text": "DeFi-Hacks 2024: Lehren für 2025"
  }, {
    "depth": 2,
    "slug": "die-häufigsten-angriffsvektoren",
    "text": "Die häufigsten Angriffsvektoren"
  }, {
    "depth": 3,
    "slug": "1-flash-loan-attacks",
    "text": "1. Flash Loan Attacks"
  }, {
    "depth": 3,
    "slug": "2-reentrancy-angriffe",
    "text": "2. Reentrancy-Angriffe"
  }, {
    "depth": 3,
    "slug": "3-oracle-manipulation",
    "text": "3. Oracle-Manipulation"
  }, {
    "depth": 2,
    "slug": "schutzmaßnahmen-für-anleger",
    "text": "Schutzmaßnahmen für Anleger"
  }, {
    "depth": 2,
    "slug": "fazit",
    "text": "Fazit"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "defi-hacks-2024-lehren-für-2025",
      children: "DeFi-Hacks 2024: Lehren für 2025"
    }), "\n", createVNode(_components.p, {
      children: ["Das Jahr 2024 war für DeFi-Investoren ein gemischtes Bild. Während die Gesamtkapitalisierung neue Höchststände erreichte, verloren Nutzer durch Sicherheitsvorfälle über ", createVNode(_components.strong, {
        children: "$2 Milliarden"
      }), ". Dieser Artikel analysiert die häufigsten Angriffsmuster."]
    }), "\n", createVNode(_components.h2, {
      id: "die-häufigsten-angriffsvektoren",
      children: "Die häufigsten Angriffsvektoren"
    }), "\n", createVNode(_components.h3, {
      id: "1-flash-loan-attacks",
      children: "1. Flash Loan Attacks"
    }), "\n", createVNode(_components.p, {
      children: "Flash Loans erlauben das unbesicherte Leihen großer Summen innerhalb einer Transaktion. Angreifer nutzen dies, um Preisorakel zu manipulieren."
    }), "\n", createVNode(_components.h3, {
      id: "2-reentrancy-angriffe",
      children: "2. Reentrancy-Angriffe"
    }), "\n", createVNode(_components.p, {
      children: "Trotz DAO-Hack (2016) bleiben Reentrancy-Schwachstellen ein Problem. Smart Contracts müssen stets “Checks-Effects-Interactions” folgen."
    }), "\n", createVNode(_components.h3, {
      id: "3-oracle-manipulation",
      children: "3. Oracle-Manipulation"
    }), "\n", createVNode(_components.p, {
      children: "Protokolle, die auf einzelne Preisorakel angewiesen sind, können durch Marktmanipulation ausgenutzt werden."
    }), "\n", createVNode(_components.h2, {
      id: "schutzmaßnahmen-für-anleger",
      children: "Schutzmaßnahmen für Anleger"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Diversifikation"
        }), " auf mehrere Protokolle"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Audit-Status"
        }), " vor Investment prüfen"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Insurance"
        }), " durch Nexus Mutual oder Sherlock"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TVL-Monitoring"
        }), " für Stressanzeichen"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "fazit",
      children: "Fazit"
    }), "\n", createVNode(_components.p, {
      children: "DeFi-Sicherheit ist kein Zustand, sondern ein kontinuierlicher Prozess. Die Branche reift, aber Vorsicht bleibt das Gebot der Stunde."
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

const url = "src/content/blog/de/defi-sicherheit-2025.mdx";
const file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/de/defi-sicherheit-2025.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/de/defi-sicherheit-2025.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
