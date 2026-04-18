import { H as createVNode, d as Fragment, _ as __astro_tag_component__ } from './entrypoint_mb6Ro_Qb.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Send and Receive Bitcoin: A Step-by-Step Guide",
  "description": "Learn exactly how to send and receive Bitcoin safely — from generating addresses to understanding UTXOs, fee selection, and transaction confirmation. A complete practical guide for all levels.",
  "date": "2026-04-17T00:00:00.000Z",
  "author": "James Hoffman",
  "category": "bitcoin",
  "tags": ["send bitcoin", "receive bitcoin", "btc", "transaction", "wallet address", "utxo"],
  "image": "/images/blog/bitcoin-transaction.png",
  "imageAlt": "How to send and receive Bitcoin — transaction flow visualization",
  "coinSymbols": ["BTC"],
  "readingTime": 10,
  "featured": false,
  "locale": "en"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "table-of-contents",
    "text": "Table of Contents"
  }, {
    "depth": 2,
    "slug": "before-you-start-prerequisites",
    "text": "Before You Start: Prerequisites"
  }, {
    "depth": 2,
    "slug": "how-to-receive-bitcoin",
    "text": "How to Receive Bitcoin"
  }, {
    "depth": 3,
    "slug": "step-by-step-receiving-btc",
    "text": "Step-by-Step: Receiving BTC"
  }, {
    "depth": 3,
    "slug": "important-rules-for-receiving",
    "text": "Important Rules for Receiving"
  }, {
    "depth": 3,
    "slug": "address-formats",
    "text": "Address Formats"
  }, {
    "depth": 2,
    "slug": "how-to-send-bitcoin",
    "text": "How to Send Bitcoin"
  }, {
    "depth": 3,
    "slug": "step-by-step-sending-btc",
    "text": "Step-by-Step: Sending BTC"
  }, {
    "depth": 3,
    "slug": "critical-safety-always-verify-address-twice",
    "text": "Critical Safety: Always Verify Address Twice"
  }, {
    "depth": 2,
    "slug": "understanding-utxos",
    "text": "Understanding UTXOs"
  }, {
    "depth": 2,
    "slug": "choosing-the-right-fee",
    "text": "Choosing the Right Fee"
  }, {
    "depth": 2,
    "slug": "verifying-your-transaction",
    "text": "Verifying Your Transaction"
  }, {
    "depth": 3,
    "slug": "block-explorers",
    "text": "Block Explorers"
  }, {
    "depth": 2,
    "slug": "bitcoin-on-lightning-network",
    "text": "Bitcoin on Lightning Network"
  }, {
    "depth": 2,
    "slug": "common-transaction-mistakes",
    "text": "Common Transaction Mistakes"
  }, {
    "depth": 2,
    "slug": "frequently-asked-questions",
    "text": "Frequently Asked Questions"
  }, {
    "depth": 3,
    "slug": "how-long-does-a-bitcoin-transfer-take",
    "text": "How long does a Bitcoin transfer take?"
  }, {
    "depth": 3,
    "slug": "can-i-cancel-a-bitcoin-transaction",
    "text": "Can I cancel a Bitcoin transaction?"
  }, {
    "depth": 3,
    "slug": "what-if-i-send-bitcoin-to-the-wrong-address",
    "text": "What if I send Bitcoin to the wrong address?"
  }, {
    "depth": 3,
    "slug": "do-i-need-to-be-online-to-receive-bitcoin",
    "text": "Do I need to be online to receive Bitcoin?"
  }, {
    "depth": 3,
    "slug": "what-is-a-bitcoin-address-qr-code",
    "text": "What is a Bitcoin address QR code?"
  }, {
    "depth": 2,
    "slug": "indexing-signals",
    "text": "Indexing Signals"
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
    pre: "pre",
    span: "span",
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
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#prerequisites",
          children: "Before You Start: Prerequisites"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#receive",
          children: "How to Receive Bitcoin"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#send",
          children: "How to Send Bitcoin"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#utxos",
          children: "Understanding UTXOs"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#fees",
          children: "Choosing the Right Fee"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#verify",
          children: "Verifying Your Transaction"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#lightning",
          children: "Bitcoin on Lightning Network"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#mistakes",
          children: "Common Transaction Mistakes"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "#faqs",
          children: "FAQs"
        })
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "before-you-start-prerequisites",
      children: "Before You Start: Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before sending or receiving Bitcoin, ensure you have:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "A Bitcoin wallet"
          }), " — hardware (Ledger, Trezor), software (Electrum, Sparrow), or mobile (Blue Wallet, Muun). See our ", createVNode(_components.a, {
            href: "/en/blog/best-bitcoin-wallets/",
            children: "best Bitcoin wallets guide"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Your private keys secured"
          }), " — Your seed phrase must be backed up offline. Never stored digitally. Learn about ", createVNode(_components.a, {
            href: "/en/blog/public-private-keys/",
            children: "public vs private keys"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Some BTC"
          }), " — You need BTC to send. To receive for the first time, you just need a wallet address."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Basic fee awareness"
          }), " — Check ", createVNode(_components.a, {
            href: "https://mempool.space",
            children: "mempool.space"
          }), " for current network conditions before large transactions. Learn about ", createVNode(_components.a, {
            href: "/en/blog/bitcoin-transaction-fees/",
            children: "Bitcoin fees"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Featured Snippet Answer:"
        }), " To send Bitcoin: open your wallet, enter the recipient’s Bitcoin address, enter the amount, select a fee rate (in sat/vbyte) based on urgency, review all details carefully, and confirm. To receive Bitcoin: open your wallet, find “Receive,” generate a Bitcoin address, and share it with the sender. After sending, wait for 1–6 confirmations depending on the transaction value."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-receive-bitcoin",
      children: "How to Receive Bitcoin"
    }), "\n", createVNode(_components.p, {
      children: "Receiving Bitcoin is simple — you just need to share your wallet address."
    }), "\n", createVNode(_components.h3, {
      id: "step-by-step-receiving-btc",
      children: "Step-by-Step: Receiving BTC"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Receive Bitcoin Flow:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. Open your Bitcoin wallet app"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. Navigate to \"Receive\" or \"Receive BTC\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. Wallet generates a Bitcoin address (e.g., bc1q...)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. Share this address with the sender:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - Copy-paste the text address"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - OR share the QR code (for in-person transactions)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. Wait for sender to initiate transaction"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "6. See \"0 confirmations\" appear in your wallet"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "7. After 3–6 confirmations, funds are fully secured"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "important-rules-for-receiving",
      children: "Important Rules for Receiving"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "✅ Generate a new address for each transaction"
      }), " — Most modern wallets do this automatically (HD wallets — Hierarchical Deterministic). This is a Bitcoin privacy best practice. Even though reusing addresses works technically, it links transactions together on the public blockchain."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "✅ Verify the address before sharing"
      }), " — If your device might be compromised with malware, specially verify the address shown on your hardware wallet’s screen."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "✅ Double-check the address starting characters"
      }), " — At minimum, verify the first 4 and last 4 characters match between what you generated and what the sender sees. Clipboard hijackers replace addresses mid-copy."]
    }), "\n", createVNode(_components.h3, {
      id: "address-formats",
      children: "Address Formats"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Format"
          }), createVNode(_components.th, {
            children: "Example"
          }), createVNode(_components.th, {
            children: "Notes"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Legacy (P2PKH)"
          }), createVNode(_components.td, {
            children: "1A1zP1eP5QGefis…"
          }), createVNode(_components.td, {
            children: "Oldest; highest fees"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "P2SH"
          }), createVNode(_components.td, {
            children: "3J98t1WpEZ73CNm…"
          }), createVNode(_components.td, {
            children: "SegWit compatible"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Native SegWit"
          }), createVNode(_components.td, {
            children: "bc1q09vm5lfy0j5…"
          }), createVNode(_components.td, {
            children: "Recommended — lower fees"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Taproot"
          }), createVNode(_components.td, {
            children: "bc1p5d7rjq7g6rdk…"
          }), createVNode(_components.td, {
            children: "Newest; best for privacy"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "how-to-send-bitcoin",
      children: "How to Send Bitcoin"
    }), "\n", createVNode(_components.p, {
      children: ["Sending Bitcoin requires careful attention — transactions are ", createVNode(_components.strong, {
        children: "irreversible"
      }), ". There is no undo button."]
    }), "\n", createVNode(_components.h3, {
      id: "step-by-step-sending-btc",
      children: "Step-by-Step: Sending BTC"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Send Bitcoin Flow:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "1. Open your Bitcoin wallet"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "2. Navigate to \"Send\" or \"Send BTC\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "3. PASTE the recipient's Bitcoin address"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   (Never manually type — paste and verify)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "4. Enter the amount:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - Specific BTC amount"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - Or specific fiat amount (wallet estimates BTC equivalent)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - Or \"Send Max\" (sends entire wallet balance minus fee)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "5. Select fee rate (sat/vbyte):"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - Low: Slow confirmation (hours to days)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - Medium: Normal confirmation (~30 min)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   - High: Fast confirmation (~10 min)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "6. VERIFY EVERYTHING before confirming:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ✓ Recipient address (first + last 4 chars minimum)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ✓ Amount correct?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   ✓ Fee acceptable?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "7. Confirm/Sign transaction"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "   (Hardware wallet: physically confirm on device)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "8. Transaction broadcast to network"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        ↓"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "9. Wait for confirmations"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "critical-safety-always-verify-address-twice",
      children: "Critical Safety: Always Verify Address Twice"
    }), "\n", createVNode(_components.p, {
      children: ["The number one cause of lost Bitcoin is sending to the wrong address — whether through typos, clipboard hijackers, or phishing. ", createVNode(_components.strong, {
        children: "Always verify:"
      })]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Copy the address"
      }), "\n", createVNode(_components.li, {
        children: "Paste it in your wallet’s “Send to” field"
      }), "\n", createVNode(_components.li, {
        children: "Verify the first 4 characters AND last 4 characters match the original"
      }), "\n", createVNode(_components.li, {
        children: "On hardware wallets: verify the address shown on the wallet screen"
      }), "\n", createVNode(_components.li, {
        children: "Only then proceed"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "understanding-utxos",
      children: "Understanding UTXOs"
    }), "\n", createVNode(_components.p, {
      children: ["Bitcoin doesn’t work like a bank account with a running balance. Instead, Bitcoin uses a ", createVNode(_components.strong, {
        children: "UTXO"
      }), " (Unspent Transaction Output) model."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "UTXO Model Example:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Alice receives:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - 0.5 BTC from Bob (UTXO #1)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - 0.3 BTC from Carol (UTXO #2)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - 0.2 BTC from Dave (UTXO #3)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Alice's \"balance\" = 3 UTXOs: 0.5 + 0.3 + 0.2 = 1.0 BTC"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Alice sends 0.6 BTC to Eve:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Wallet automatically selects UTXO #1 (0.5) + UTXO #2 (0.3) = 0.8 BTC"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Input: 0.8 BTC"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Output #1: 0.6 BTC → Eve"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Output #2: 0.19 BTC → Alice (change, back to her own wallet)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  - Fee: 0.01 BTC → Miner"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Practical implications of UTXOs:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Coin selection matters"
          }), " — Advanced wallets (Sparrow, Electrum) let you manually select which UTXOs to use, improving privacy and fee efficiency."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "More inputs = bigger transaction = higher fee"
          }), " — If you have many small UTXOs, consider consolidating during low-fee periods."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Change addresses are normal"
          }), " — Seeing two outputs in your transaction (recipient + yourself) is completely normal. Your wallet automatically handles change."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "choosing-the-right-fee",
      children: "Choosing the Right Fee"
    }), "\n", createVNode(_components.p, {
      children: ["Fee selection is one of the most important decisions when sending Bitcoin. Check ", createVNode(_components.a, {
        href: "/en/blog/bitcoin-transaction-fees/",
        children: "current fee rates"
      }), " at mempool.space before every significant transaction."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Scenario"
          }), createVNode(_components.th, {
            children: "Fee Recommendation"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Paying for coffee (Lightning preferred)"
          }), createVNode(_components.td, {
            children: "Use Lightning instead"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Non-urgent personal transfer"
          }), createVNode(_components.td, {
            children: "Low priority (1–5 sat/vbyte)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Business payment (1-2 hour window)"
          }), createVNode(_components.td, {
            children: "Medium priority (~10-30 sat/vbyte)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Time-sensitive (need next block)"
          }), createVNode(_components.td, {
            children: "High priority (see mempool.space)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Large exchange deposit"
          }), createVNode(_components.td, {
            children: "Medium-high (check exchange min confirmations)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "During a congestion event"
          }), createVNode(_components.td, {
            children: "High priority or wait"
          })]
        })]
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "verifying-your-transaction",
      children: "Verifying Your Transaction"
    }), "\n", createVNode(_components.p, {
      children: ["After sending, anyone can verify your transaction status on the public blockchain using a ", createVNode(_components.strong, {
        children: "block explorer"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "block-explorers",
      children: "Block Explorers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Explorer"
          }), createVNode(_components.th, {
            children: "URL"
          }), createVNode(_components.th, {
            children: "Features"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Mempool.space"
          }), createVNode(_components.td, {
            children: "mempool.space"
          }), createVNode(_components.td, {
            children: "Best UX, mempool visualization"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Blockstream.info"
          }), createVNode(_components.td, {
            children: "blockstream.info"
          }), createVNode(_components.td, {
            children: "Privacy-focused"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "Blockchain.com"
          }), createVNode(_components.td, {
            children: "blockchain.com/explorer"
          }), createVNode(_components.td, {
            children: "Popular, good for beginners"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "To verify a transaction:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Copy your ", createVNode(_components.strong, {
          children: "Transaction ID (TXID)"
        }), " from your wallet"]
      }), "\n", createVNode(_components.li, {
        children: "Paste it into a block explorer search bar"
      }), "\n", createVNode(_components.li, {
        children: "See: status (pending/confirmed), confirmations, inputs, outputs, fee paid"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Learn about ", createVNode(_components.a, {
        href: "/en/blog/what-are-bitcoin-confirmations/",
        children: "Bitcoin confirmations"
      }), " to understand what different confirmation counts mean."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "bitcoin-on-lightning-network",
      children: "Bitcoin on Lightning Network"
    }), "\n", createVNode(_components.p, {
      children: ["For instant payments, many users now use the ", createVNode(_components.a, {
        href: "/en/blog/lightning-network/",
        children: "Lightning Network"
      }), " instead of on-chain Bitcoin."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Lightning Send vs. On-Chain Send:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Lightning: Near-instant, near-free, private"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "On-Chain: 10+ min, variable fee, public blockchain record"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Use Lightning for:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ Small everyday payments (&lt;$500)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ When instant settlement is needed"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ Micropayments/streaming money"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ Recurring small payments"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Use On-Chain for:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ Large transfers ($1,000+)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ Long-term storage moves"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ Exchange deposits/withdrawals"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "✅ When the recipient only accepts on-chain"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Lightning addresses look like: ", createVNode(_components.code, {
        children: "username@domain.com"
      }), " (LNURL)\nOr as a ", createVNode(_components.strong, {
        children: "Lightning Invoice"
      }), ": ", createVNode(_components.code, {
        children: "lnbc50u1p3..."
      }), " (expires after set time)"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "common-transaction-mistakes",
      children: "Common Transaction Mistakes"
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Sending to the wrong address"
      }), " — Irreversible. Always verify first + last 4 characters."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Sending to an Ethereum address instead of Bitcoin"
      }), " — These are incompatible networks. Always use correct Bitcoin addresses for Bitcoin transactions."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Using too low a fee"
      }), " — Transaction may take days or never confirm. Use RBF if stuck."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Forgetting about exchange minimum confirmations"
      }), " — Exchanges typically require 3–6 confirmations before crediting your deposit. Account for this in time estimates."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Not testing with a small amount first"
      }), " — For new recipients or first use of a new wallet, always send a small test amount and verify receipt before the main transfer."]
    }), "\n", createVNode(_components.p, {
      children: ["❌ ", createVNode(_components.strong, {
        children: "Sharing your receiving address publicly"
      }), " — While technically safe, publicly linking an address to your identity connects blockchain analytics to your real identity."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "frequently-asked-questions",
      children: "Frequently Asked Questions"
    }), "\n", createVNode(_components.h3, {
      id: "how-long-does-a-bitcoin-transfer-take",
      children: "How long does a Bitcoin transfer take?"
    }), "\n", createVNode(_components.p, {
      children: "The first confirmation takes ~10 minutes on average (but varies widely from 1–60+ min). For most purposes, 3 confirmations (~30 min average) is sufficient. For large amounts or exchange deposits, wait for 6 confirmations (~1 hour average)."
    }), "\n", createVNode(_components.h3, {
      id: "can-i-cancel-a-bitcoin-transaction",
      children: "Can I cancel a Bitcoin transaction?"
    }), "\n", createVNode(_components.p, {
      children: "Once broadcast to the network, you can’t cancel a Bitcoin transaction — but if it’s unconfirmed (still in mempool), you may be able to use RBF (Replace-By-Fee) to replace it with a higher-fee version to the same or different address."
    }), "\n", createVNode(_components.h3, {
      id: "what-if-i-send-bitcoin-to-the-wrong-address",
      children: "What if I send Bitcoin to the wrong address?"
    }), "\n", createVNode(_components.p, {
      children: "Unfortunately, Bitcoin transactions are irreversible. If the address belongs to someone else, they can choose to send it back but aren’t required to. This is why verifying addresses is critically important. If the address doesn’t exist or is invalid, many wallets will reject the transaction before broadcasting."
    }), "\n", createVNode(_components.h3, {
      id: "do-i-need-to-be-online-to-receive-bitcoin",
      children: "Do I need to be online to receive Bitcoin?"
    }), "\n", createVNode(_components.p, {
      children: "No — Bitcoin can be sent to your address whether you’re online or not. Your wallet simply syncs when it reconnects to see new transactions addressed to you."
    }), "\n", createVNode(_components.h3, {
      id: "what-is-a-bitcoin-address-qr-code",
      children: "What is a Bitcoin address QR code?"
    }), "\n", createVNode(_components.p, {
      children: "A QR code is a visual representation of your Bitcoin address that can be scanned by a sender’s wallet camera for convenience and to avoid typos. They’re widely used for in-person Bitcoin payments."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "indexing-signals",
      children: "Indexing Signals"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Slug:"
      }), " ", createVNode(_components.code, {
        children: "/en/blog/how-to-send-receive-bitcoin/"
      }), "\n", createVNode(_components.strong, {
        children: "Sitemap Priority:"
      }), " 0.8\n", createVNode(_components.strong, {
        children: "Content Type:"
      }), " Supporting — Transactions Cluster"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Suggested Internal Links:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/bitcoin-transaction-fees/",
          children: "Bitcoin Transaction Fees"
        }), " — “setting the right fee”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/what-are-bitcoin-confirmations/",
          children: "Bitcoin Confirmations"
        }), " — “confirmation count”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/best-bitcoin-wallets/",
          children: "Best Bitcoin Wallets"
        }), " — “wallet choice”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/public-private-keys/",
          children: "Public vs Private Keys"
        }), " — “address security”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/lightning-network/",
          children: "Lightning Network"
        }), " — “instant payments”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "/en/blog/is-bitcoin-anonymous/",
          children: "Is Bitcoin Anonymous?"
        }), " — “address privacy”"]
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

const url = "src/content/blog/en/how-to-send-receive-bitcoin.mdx";
const file = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/en/how-to-send-receive-bitcoin.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Sheikh Farooq/Documents/GitHub/krypto watch/src/content/blog/en/how-to-send-receive-bitcoin.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
