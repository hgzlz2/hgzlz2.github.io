document.addEventListener('DOMContentLoaded', () => {
    // Word list - common 5-letter words
    const WORDS = [
        "APPLE", "BEACH", "BRAIN", "BREAD", "BREAK", "BROWN", "BUYER", "CAUSE", "CHAIN", "CHAIR",
        "CHEST", "CHIEF", "CHILD", "CHINA", "CLAIM", "CLASS", "CLOCK", "CLOUD", "COAST", "COURT",
        "COVER", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN", "CYCLE", "DANCE", "DEATH", "DEPTH",
        "DOUBT", "DRAFT", "DRAMA", "DREAM", "DRESS", "DRINK", "DRIVE", "EARTH", "ENEMY", "ENTRY",
        "ERROR", "EVENT", "FAITH", "FAULT", "FIELD", "FIGHT", "FINAL", "FLOOR", "FOCUS", "FORCE",
        "FRAME", "FRANK", "FRONT", "FRUIT", "GLASS", "GRANT", "GRASS", "GREEN", "GROUP", "GUIDE",
        "HEART", "HENRY", "HORSE", "HOTEL", "HOUSE", "IMAGE", "INDEX", "INPUT", "ISSUE", "JAPAN",
        "JONES", "JUDGE", "KNIFE", "LAURA", "LAYER", "LEVEL", "LEWIS", "LIGHT", "LIMIT", "LUNCH",
        "MAJOR", "MARCH", "MATCH", "METAL", "MODEL", "MONEY", "MONTH", "MOTOR", "MOUTH", "MUSIC",
        "NIGHT", "NOISE", "NORTH", "NOVEL", "NURSE", "OFFER", "ORDER", "OTHER", "OWNER", "PANEL",
        "PAPER", "PARTY", "PEACE", "PETER", "PHASE", "PHONE", "PIECE", "PILOT", "PITCH", "PLACE",
        "PLANE", "PLANT", "PLATE", "POINT", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIZE",
        "PROOF", "QUEEN", "RADIO", "RANGE", "RATIO", "REPLY", "RIGHT", "RIVER", "ROUND", "ROUTE",
        "RUGBY", "SCALE", "SCENE", "SCOPE", "SCORE", "SENSE", "SHAPE", "SHARE", "SHEEP", "SHEET",
        "SHIFT", "SHIRT", "SHOCK", "SIGHT", "SIMON", "SKILL", "SLEEP", "SMILE", "SMITH", "SMOKE",
        "SOUND", "SOUTH", "SPACE", "SPEED", "SPITE", "SPORT", "SQUAD", "STAFF", "STAGE", "START",
        "STATE", "STEAM", "STEEL", "STOCK", "STONE", "STORE", "STUDY", "STUFF", "STYLE", "SUGAR",
        "TABLE", "TASTE", "TERRY", "THEME", "THING", "TITLE", "TOTAL", "TOUCH", "TOWER", "TRACK",
        "TRADE", "TRAIN", "TREND", "TRIAL", "TRUST", "TRUTH", "UNCLE", "UNION", "UNITY", "VALUE",
        "VIDEO", "VISIT", "VOICE", "WASTE", "WATCH", "WATER", "WHILE", "WHITE", "WHOLE", "WOMAN",
        "WORLD", "YOUTH", "ALLEY", "AMBER", "ARMOR", "ARROW", "BACON", "BADGE", "BASIC", "BASIL",
        "BASIN", "BISON", "BLAST", "BLAZE", "BLISS", "BLOOM", "BLUFF", "BLUNT", "BRAID", "BRAVE",
        "BRIBE", "BRICK", "BRISK", "BROIL", "BROTH", "BULLY", "BUNCH", "BUNNY", "BURST", "CABIN",
        "CABLE", "CAMEL", "CANAL", "CANDY", "CAPER", "CAPON", "CARAT", "CARGO", "CAROL", "CARRY",
        "CARVE", "CATCH", "CAULK", "CAUSE", "CAVIL", "CEASE", "CEDAR", "CELLO", "CHAFE", "CHAFF",
        "CHAIN", "CHALK", "CHARM", "CHART", "CHASE", "CHASM", "CHEAP", "CHEAT", "CHECK", "CHEER",
        "CHESS", "CHEST", "CHICK", "CHIEF", "CHILD", "CHILL", "CHIME", "CHIRP", "CHIVE", "CHOIR",
        "CHOKE", "CHORD", "CHORE", "CHUCK", "CHUMP", "CHUNK", "CHURN", "CHUTE", "CIDER", "CIGAR",
        "CINCH", "CIVIC", "CIVIL", "CLACK", "CLAIM", "CLAMP", "CLANG", "CLANK", "CLASH", "CLASP",
        "CLEAN", "CLEAR", "CLEAT", "CLEFT", "CLERK", "CLICK", "CLIFF", "CLIMB", "CLING", "CLINK",
        "CLOAK", "CLOCK", "CLONE", "CLOSE", "CLOTH", "CLOUD", "CLOUT", "CLOVE", "CLOWN", "CLUCK",
        "CLUMP", "COACH", "COAST", "COBRA", "COCOA", "COLON", "COLOR", "COMET", "COMIC", "COMMA",
        "CONCH", "CONDO", "CONIC", "COPSE", "CORAL", "CORER", "CORNY", "COUCH", "COUGH", "COUNT",
        "COURT", "COVEN", "COVER", "COVET", "COVEY", "COWER", "COYLY", "CRACK", "CRAFT", "CRAMP",
        "CRANE", "CRANK", "CRASH", "CRASS", "CRATE", "CRAVE", "CRAWL", "CRAZE", "CRAZY", "CREAK",
        "CREAM", "CREDO", "CREED", "CREEK", "CREEP", "CREME", "CREPE", "CREPT", "CRESS", "CREST",
        "CRICK", "CRIED", "CRIER", "CRIME", "CRIMP", "CRISP", "CROAK", "CROCK", "CRONE", "CRONY",
        "CROOK", "CROSS", "CROUP", "CROWD", "CROWN", "CRUDE", "CRUEL", "CRUMB", "CRUSH", "CRUST",
        "CRYPT", "CUBIC", "CUMIN", "CURIO", "CURLY", "CURRY", "CURSE", "CURVE", "CURVY", "CUTIE",
        "CYBER", "CYCLE", "CYNIC", "DAILY", "DAIRY", "DAISY", "DALLY", "DANCE", "DANDY", "DATUM",
        "DAUNT", "DEALT", "DEATH", "DEBAR", "DEBIT", "DEBUG", "DEBUT", "DECAL", "DECAY", "DECOR",
        "DECOY", "DECRY", "DEFER", "DEIGN", "DEITY", "DELAY", "DELTA", "DELVE", "DEMON", "DEMUR",
        "DENIM", "DENSE", "DEPOT", "DEPTH", "DERBY", "DETER", "DETOX", "DEUCE", "DEVIL", "DIARY",
        "DICEY", "DIGIT", "DILLY", "DIMLY", "DINER", "DINGO", "DINGY", "DIODE", "DIRGE", "DIRTY",
        "DISCO", "DITCH", "DITTO", "DITTY", "DIVER", "DIZZY", "DODGE", "DOGMA", "DOING", "DOLLY",
        "DONOR", "DONUT", "DOUBT", "DOUGH", "DOWDY", "DOWEL", "DOWNY", "DOWRY", "DOZEN", "DRAFT",
        "DRAIN", "DRAKE", "DRAMA", "DRANK", "DRAPE", "DRAWL", "DRAWN", "DREAD", "DREAM", "DRESS",
        "DRIED", "DRIER", "DRIFT", "DRILL", "DRINK", "DRIVE", "DROIT", "DROLL", "DRONE", "DROOL",
        "DROOP", "DROSS", "DROVE", "DROWN", "DRUID", "DRUNK", "DRYER", "DRYLY", "DUCHY", "DULLY",
        "DUMMY", "DUMPY", "DUNCE", "DUSKY", "DUSTY", "DUTCH", "DUVET", "DWARF", "DWELL", "DWELT",
        "DYING", "EAGER", "EAGLE", "EARLY", "EARTH", "EASEL", "EATEN", "EATER", "EBONY", "ECLAT",
        "EDICT", "EDIFY", "EERIE", "EGRET", "EIGHT", "EJECT", "EKING", "ELATE", "ELBOW", "ELDER",
        "ELECT", "ELEGY", "ELFIN", "ELIDE", "ELITE", "ELOPE", "ELUDE", "EMAIL", "EMBED", "EMBER",
        "EMCEE", "EMPTY", "ENACT", "ENDOW", "ENEMA", "ENEMY", "ENJOY", "ENNUI", "ENSUE", "ENTER",
        "ENTRY", "ENVOY", "EPOCH", "EPOXY", "EQUAL", "EQUIP", "ERASE", "ERECT", "ERODE", "ERROR",
        "ERUPT", "ESSAY", "ESTER", "ETHER", "ETHIC", "ETHOS", "ETUDE", "EVADE", "EVENT", "EVERY",
        "EVICT", "EVOKE", "EXACT", "EXALT", "EXCEL", "EXERT", "EXILE", "EXIST", "EXPEL", "EXTOL",
        "EXTRA", "EXULT", "EYING", "FABLE", "FACET", "FAINT", "FAIRY", "FAITH", "FALSE", "FANCY",
        "FANNY", "FARCE", "FATAL", "FATTY", "FAULT", "FAUNA", "FAVOR", "FEAST", "FECAL", "FEIGN",
        "FELLA", "FELON", "FEMME", "FEMUR", "FENCE", "FERAL", "FERRY", "FETAL", "FETCH", "FETID",
        "FETUS", "FEVER", "FEWER", "FIBER", "FIBRE", "FICUS", "FIELD", "FIEND", "FIERY", "FIFTH",
        "FIFTY", "FIGHT", "FILER", "FILET", "FILLY", "FILMY", "FILTH", "FINAL", "FINCH", "FINER",
        "FIRST", "FISHY", "FIXER", "FIZZY", "FJORD", "FLACK", "FLAIL", "FLAIR", "FLAKE", "FLAKY",
        "FLAME", "FLANK", "FLARE", "FLASH", "FLASK", "FLECK", "FLEET", "FLESH", "FLICK", "FLIER",
        "FLING", "FLINT", "FLIRT", "FLOAT", "FLOCK", "FLOOD", "FLOOR", "FLORA", "FLOSS", "FLOUR",
        "FLOUT", "FLOWN", "FLUFF", "FLUID", "FLUKE", "FLUME", "FLUNG", "FLUNK", "FLUSH", "FLUTE",
        "FLYER", "FOAMY", "FOCAL", "FOCUS", "FOGGY", "FOIST", "FOLIO", "FOLLY", "FORAY", "FORCE",
        "FORGE", "FORGO", "FORTE", "FORTH", "FORTY", "FORUM", "FOUND", "FOYER", "FRAIL", "FRAME",
        "FRANK", "FRAUD", "FREAK", "FRESH", "FRIAR", "FRIED", "FRILL", "FRISK", "FRITZ", "FROCK",
        "FROND", "FRONT", "FROST", "FROTH", "FROWN", "FROZE", "FRUIT", "FUDGE", "FUGUE", "FULLY",
        "FUNGI", "FUNKY", "FUNNY", "FUROR", "FURRY", "FUSSY", "FUZZY", "GAFFE", "GAILY", "GAMER",
        "GAMMA", "GAMUT", "GASSY", "GAUDY", "GAUGE", "GAUNT", "GAUZE", "GAVEL", "GAWKY", "GAYER",
        "GAYLY", "GAZER", "GECKO", "GEEKY", "GEESE", "GENIE", "GENRE", "GHOST", "GHOUL", "GIANT",
        "GIDDY", "GIPSY", "GIRLY", "GIRTH", "GIVEN", "GIVER", "GLADE", "GLAND", "GLARE", "GLASS",
        "GLAZE", "GLEAM", "GLEAN", "GLIDE", "GLINT", "GLOAT", "GLOBE", "GLOOM", "GLORY", "GLOSS",
        "GLOVE", "GLYPH", "GNASH", "GNOME", "GODLY", "GOING", "GOLEM", "GOLLY", "GONAD", "GONER",
        "GOODY", "GOOEY", "GOOFY", "GOOSE", "GORGE", "GOUGE", "GOURD", "GRACE", "GRADE", "GRAFT",
        "GRAIL", "GRAIN", "GRAND", "GRANT", "GRAPE", "GRAPH", "GRASP", "GRASS", "GRATE", "GRAVE",
        "GRAVY", "GRAZE", "GREAT", "GREED", "GREEN", "GREET", "GRIEF", "GRILL", "GRIME", "GRIMY",
        "GRIND", "GRIPE", "GROAN", "GROIN", "GROOM", "GROPE", "GROSS", "GROUP", "GROUT", "GROVE",
        "GROWL", "GROWN", "GRUEL", "GRUFF", "GRUNT", "GUARD", "GUAVA", "GUESS", "GUEST", "GUIDE",
        "GUILD", "GUILE", "GUILT", "GUISE", "GULCH", "GULLY", "GUMBO", "GUMMY", "GUPPY", "GUSTO",
        "GUSTY", "GYPSY", "HABIT", "HAIRY", "HALVE", "HANDY", "HAPPY", "HARDY", "HAREM", "HARPY",
        "HARRY", "HARSH", "HASTE", "HASTY", "HATCH", "HATER", "HAUNT", "HAUTE", "HAVEN", "HAVOC",
        "HAZEL", "HEADY", "HEARD", "HEART", "HEATH", "HEAVE", "HEAVY", "HEDGE", "HEFTY", "HEIST",
        "HELIX", "HELLO", "HENCE", "HERON", "HILLY", "HINGE", "HIPPO", "HIPPY", "HITCH", "HOARD",
        "HOBBY", "HOIST", "HOLLY", "HOMER", "HONEY", "HONOR", "HORDE", "HORNY", "HORSE", "HOTEL",
        "HOTLY", "HOUND", "HOUSE", "HOVEL", "HOVER", "HOWDY", "HUMAN", "HUMID", "HUMOR", "HUMPH",
        "HUMUS", "HUNCH", "HUNKY", "HURRY", "HUSKY", "HUSSY", "HUTCH", "HYDRO", "HYENA", "HYMEN",
        "HYPER", "ICILY", "ICING", "IDEAL", "IDIOM", "IDIOT", "IDLER", "IDYLL", "IGLOO", "ILIAC",
        "IMAGE", "IMBUE", "IMPEL", "IMPLY", "INANE", "INBOX", "INCUR", "INDEX", "INEPT", "INERT",
        "INFER", "INGOT", "INLAY", "INLET", "INNER", "INPUT", "INTER", "INTRO", "IONIC", "IRATE",
        "IRONY", "ISLET", "ISSUE", "ITCHY", "IVORY", "JAUNT", "JAZZY", "JELLY", "JERKY", "JETTY",
        "JEWEL", "JIFFY", "JOINT", "JOIST", "JOKER", "JOLLY", "JOUST", "JUDGE", "JUICE", "JUICY",
        "JUMBO", "JUMPY", "JUNTA", "JUNTO", "JUROR", "KAPPA", "KARMA", "KAYAK", "KEBAB", "KHAKI",
        "KINKY", "KIOSK", "KITTY", "KNACK", "KNAVE", "KNEAD", "KNEED", "KNEEL", "KNELT", "KNIFE",
        "KNOCK", "KNOLL", "KNOWN", "KOALA", "KRILL", "LABEL", "LABOR", "LADEN", "LADLE", "LAGER",
        "LANCE", "LANKY", "LAPEL", "LAPSE", "LARGE", "LARVA", "LASSO", "LATCH", "LATER", "LATHE",
        "LATTE", "LAUGH", "LAYER", "LEACH", "LEAFY", "LEAKY", "LEANT", "LEAPT", "LEARN", "LEASE",
        "LEASH", "LEAST", "LEAVE", "LEDGE", "LEECH", "LEERY", "LEFTY", "LEGAL", "LEGGY", "LEMON",
        "LEMUR", "LEPER", "LEVEL", "LEVER", "LIBEL", "LIEGE", "LIGHT", "LIKEN", "LILAC", "LIMBO",
        "LIMIT", "LINEN", "LINER", "LINGO", "LIPID", "LITHE", "LIVER", "LIVID", "LLAMA", "LOAMY",
        "LOATH", "LOBBY", "LOCAL", "LOCUS", "LODGE", "LOFTY", "LOGIC", "LOGIN", "LOOPY", "LOOSE",
        "LORRY", "LOSER", "LOUSE", "LOUSY", "LOVER", "LOWER", "LOWLY", "LOYAL", "LUCID", "LUCKY",
        "LUMEN", "LUMPY", "LUNAR", "LUNCH", "LUNGE", "LUPUS", "LURCH", "LURID", "LUSTY", "LYING",
        "LYMPH", "LYNCH", "LYRIC", "MACAW", "MACHO", "MACRO", "MADAM", "MADLY", "MAFIA", "MAGIC",
        "MAGMA", "MAIZE", "MAJOR", "MAKER", "MAMBO", "MAMMA", "MAMMY", "MANGA", "MANGE", "MANGO",
        "MANGY", "MANIA", "MANIC", "MANLY", "MANOR", "MAPLE", "MARCH", "MARRY", "MARSH", "MASON",
        "MASSE", "MATCH", "MATEY", "MAUVE", "MAXIM", "MAYBE", "MAYOR", "MEALY", "MEANT", "MEATY",
        "MECCA", "MEDAL", "MEDIA", "MEDIC", "MELEE", "MELON", "MERCY", "MERGE", "MERIT", "MERRY",
        "METAL", "METER", "METRO", "MICRO", "MIDGE", "MIDST", "MIGHT", "MILKY", "MIMIC", "MINCE",
        "MINER", "MINIM", "MINOR", "MINTY", "MINUS", "MIRTH", "MISER", "MISSY", "MOCHA", "MODAL",
        "MODEL", "MODEM", "MOGUL", "MOIST", "MOLAR", "MOLDY", "MONEY", "MONTH", "MOODY", "MOOSE",
        "MORAL", "MORON", "MORPH", "MOSSY", "MOTEL", "MOTIF", "MOTOR", "MOTTO", "MOULT", "MOUND",
        "MOUNT", "MOURN", "MOUSE", "MOUTH", "MOVER", "MOVIE", "MOWER", "MUCKY", "MUCUS", "MUDDY",
        "MULCH", "MUMMY", "MUNCH", "MURAL", "MURKY", "MUSHY", "MUSIC", "MUSKY", "MUSTY", "MYRRH",
        "NADIR", "NAIVE", "NANNY", "NAPPY", "NAVAL", "NAVEL", "NEEDY", "NEIGH", "NERDY", "NERVE",
        "NEVER", "NEWER", "NEWLY", "NICER", "NICHE", "NIECE", "NIGHT", "NINJA", "NINNY", "NINTH",
        "NOBLE", "NOBLY", "NOISE", "NOISY", "NOMAD", "NOOSE", "NORTH", "NOSE", "NOTCH", "NOVEL",
        "NUDGE", "NURSE", "NUTTY", "NYLON", "NYMPH", "OAKEN", "OBESE", "OCCUR", "OCEAN", "OCTAL",
        "OCTET", "ODDER", "ODDLY", "OFFAL", "OFFER", "OFTEN", "OLDEN", "OLDER", "OLIVE", "OMBRE",
        "OMEGA", "ONION", "ONSET", "OPERA", "OPINE", "OPIUM", "OPTIC", "ORBIT", "ORDER", "ORGAN",
        "OTHER", "OTTER", "OUGHT", "OUNCE", "OUTDO", "OUTER", "OUTGO", "OVARY", "OVATE", "OVERT",
        "OVINE", "OVOID", "OWING", "OWNER", "OXIDE", "OZONE", "PADDY", "PAGAN", "PAINT", "PALER",
        "PALSY", "PANEL", "PANIC", "PANSY", "PAPAL", "PAPER", "PARER", "PARKA", "PARRY", "PARSE",
        "PARTY", "PASTA", "PASTE", "PASTY", "PATCH", "PATIO", "PATSY", "PATTY", "PAUSE", "PAYEE",
        "PAYER", "PEACE", "PEACH", "PEARL", "PECAN", "PEDAL", "PENAL", "PENCE", "PENNE", "PENNY",
        "PERCH", "PERIL", "PERKY", "PESKY", "PESTO", "PETAL", "PETTY", "PHASE", "PHONE", "PHONY",
        "PHOTO", "PIANO", "PICKY", "PIECE", "PIETY", "PIGGY", "PILOT", "PINCH", "PINEY", "PINKY",
        "PINTO", "PIPER", "PIQUE", "PITCH", "PITHY", "PIVOT", "PIXEL", "PIXIE", "PIZZA", "PLACE",
        "PLAID", "PLAIN", "PLAIT", "PLANE", "PLANK", "PLANT", "PLATE", "PLAZA", "PLEAD", "PLEAT",
        "PLIED", "PLIER", "PLUCK", "PLUMB", "PLUME", "PLUMP", "PLUNK", "PLUSH", "POESY", "POINT",
        "POISE", "POKER", "POLAR", "POLKA", "POLYP", "POOCH", "POPPY", "PORCH", "POSER", "POSIT",
        "POSSE", "POUCH", "POUND", "POUTY", "POWER", "PRANK", "PRAWN", "PREEN", "PRESS", "PRICE",
        "PRICK", "PRIDE", "PRIED", "PRIME", "PRIMO", "PRINT", "PRIOR", "PRISM", "PRIVY", "PRIZE",
        "PROBE", "PRONE", "PRONG", "PROOF", "PROSE", "PROUD", "PROVE", "PROWL", "PROXY", "PRUDE",
        "PRUNE", "PSALM", "PUBIC", "PUDGY", "PUFFY", "PULPY", "PULSE", "PUNCH", "PUPIL", "PUPPY",
        "PUREE", "PURER", "PURGE", "PURSE", "PUSHY", "PUTTY", "PYGMY", "QUACK", "QUAIL", "QUAKE",
        "QUALM", "QUARK", "QUART", "QUASH", "QUASI", "QUEEN", "QUEER", "QUELL", "QUERY", "QUEST",
        "QUEUE", "QUICK", "QUIET", "QUILL", "QUILT", "QUIRK", "QUITE", "QUOTA", "QUOTE", "QUOTH",
        "RABBI", "RABID", "RACER", "RADAR", "RADII", "RADIO", "RAINY", "RAISE", "RAJAH", "RALLY",
        "RALPH", "RAMEN", "RANCH", "RANDY", "RANGE", "RAPID", "RARER", "RASPY", "RATIO", "RATTY",
        "RAVEN", "RAYON", "RAZOR", "REACH", "REACT", "READY", "REALM", "REARM", "REBAR", "REBEL",
        "REBUS", "REBUT", "RECAP", "RECUR", "RECUT", "REEDY", "REFER", "REFIT", "REGAL", "REHAB",
        "REIGN", "RELAX", "RELAY", "RELIC", "REMIT", "RENAL", "RENEW", "REPAY", "REPEL", "REPLY",
        "RERUN", "RESET", "RESIN", "RETCH", "RETRO", "RETRY", "REUSE", "REVEL", "REVUE", "RHINO",
        "RHYME", "RIDER", "RIDGE", "RIFLE", "RIGHT", "RIGID", "RIGOR", "RINSE", "RIPEN", "RIPER",
        "RISEN", "RISER", "RISKY", "RIVAL", "RIVER", "RIVET", "ROACH", "ROAST", "ROBIN", "ROBOT",
        "ROCKY", "RODEO", "ROGER", "ROGUE", "ROOMY", "ROOST", "ROTOR", "ROUGE", "ROUGH", "ROUND",
        "ROUSE", "ROUTE", "ROVER", "ROWDY", "ROWER", "ROYAL", "RUDDY", "RUDER", "RUGBY", "RULER",
        "RUMBA", "RUMOR", "RUPEE", "RURAL", "RUSTY", "SADLY", "SAFER", "SAINT", "SALAD", "SALLY",
        "SALON", "SALSA", "SALTY", "SALVE", "SALVO", "SANDY", "SANER", "SAPPY", "SASSY", "SATIN",
        "SATYR", "SAUCE", "SAUCY", "SAUNA", "SAUTE", "SAVOR", "SAVOY", "SAVVY", "SCALD", "SCALE",
        "SCALP", "SCALY", "SCAMP", "SCANT", "SCARE", "SCARF", "SCARY", "SCENE", "SCENT", "SCION",
        "SCOFF", "SCOLD", "SCONE", "SCOOP", "SCOPE", "SCORE", "SCORN", "SCOUR", "SCOUT", "SCOWL",
        "SCRAM", "SCRAP", "SCREE", "SCREW", "SCRUB", "SCRUM", "SCUBA", "SEDAN", "SEEDY", "SEGUE",
        "SEIZE", "SEMEN", "SENSE", "SEPIA", "SERIF", "SERUM", "SERVE", "SETUP", "SEVEN", "SEVER",
        "SEWER", "SHACK", "SHADE", "SHADY", "SHAFT", "SHAKE", "SHAKY", "SHALE", "SHALL", "SHALT",
        "SHAME", "SHANK", "SHAPE", "SHARD", "SHARE", "SHARK", "SHARP", "SHAVE", "SHAWL", "SHEAF",
        "SHEAR", "SHEEN", "SHEEP", "SHEER", "SHEET", "SHEIK", "SHELF", "SHELL", "SHIED", "SHIFT",
        "SHINE", "SHINY", "SHIRE", "SHIRK", "SHIRT", "SHOAL", "SHOCK", "SHONE", "SHOOK", "SHOOT",
        "SHORE", "SHORN", "SHORT", "SHOUT", "SHOVE", "SHOWN", "SHOWY", "SHREW", "SHRUB", "SHRUG",
        "SHUCK", "SHUNT", "SHUSH", "SHYLY", "SIEGE", "SIEVE", "SIGHT", "SIGMA", "SILKY", "SILLY",
        "SINCE", "SINEW", "SINGE", "SIREN", "SISSY", "SIXTH", "SIXTY", "SKATE", "SKIER", "SKIFF",
        "SKILL", "SKIMP", "SKIRT", "SKULK", "SKULL", "SKUNK", "SLACK", "SLAIN", "SLANG", "SLANT",
        "SLASH", "SLATE", "SLAVE", "SLEEK", "SLEEP", "SLEET", "SLEPT", "SLICE", "SLICK", "SLIDE",
        "SLIME", "SLIMY", "SLING", "SLINK", "SLOOP", "SLOPE", "SLOSH", "SLOTH", "SLUMP", "SLUNG",
        "SLUNK", "SLURP", "SLUSH", "SLYLY", "SMACK", "SMALL", "SMART", "SMASH", "SMEAR", "SMELL",
        "SMELT", "SMILE", "SMIRK", "SMITE", "SMITH", "SMOCK", "SMOKE", "SMOKY", "SMOTE", "SNACK",
        "SNAIL", "SNAKE", "SNAKY", "SNARE", "SNARL", "SNEAK", "SNEER", "SNIDE", "SNIFF", "SNIPE",
        "SNOOP", "SNORE", "SNORT", "SNOUT", "SNOWY", "SNUCK", "SNUFF", "SOAPY", "SOBER", "SOGGY",
        "SOLAR", "SOLID", "SOLVE", "SONAR", "SONIC", "SOOTH", "SOOTY", "SORRY", "SOUND", "SOUTH",
        "SOWER", "SPACE", "SPADE", "SPANK", "SPARE", "SPARK", "SPASM", "SPAWN", "SPEAK", "SPEAR",
        "SPECK", "SPEED", "SPELL", "SPELT", "SPEND", "SPENT", "SPERM", "SPICE", "SPICY", "SPIED",
        "SPIEL", "SPIKE", "SPIKY", "SPILL", "SPINE", "SPINY", "SPIRE", "SPITE", "SPLAT", "SPLAY",
        "SPLIT", "SPOIL", "SPOKE", "SPOOF", "SPOOK", "SPOOL", "SPOON", "SPORE", "SPORT", "SPOUT",
        "SPRAY", "SPREE", "SPRIG", "SPUNK", "SPURN", "SPURT", "SQUAD", "SQUAT", "SQUIB", "STACK",
        "STAFF", "STAGE", "STAID", "STAIN", "STAIR", "STAKE", "STALE", "STALK", "STALL", "STAMP",
        "STAND", "STANK", "STARE", "STARK", "START", "STASH", "STATE", "STAVE", "STEAD", "STEAK",
        "STEAL", "STEAM", "STEED", "STEEL", "STEEP", "STEER", "STEIN", "STERN", "STICK", "STIFF",
        "STILL", "STILT", "STING", "STINK", "STINT", "STOCK", "STOIC", "STOKE", "STOLE", "STOMP",
        "STONE", "STONY", "STOOD", "STOOL", "STOOP", "STORE", "STORK", "STORM", "STORY", "STOUT",
        "STOVE", "STRAP", "STRAW", "STRAY", "STRIP", "STRUT", "STUCK", "STUDY", "STUFF", "STUMP",
        "STUNG", "STUNK", "STUNT", "STYLE", "SUAVE", "SUGAR", "SUING", "SUITE", "SULKY", "SULLY",
        "SUMAC", "SUNNY", "SUPER", "SURER", "SURGE", "SURLY", "SUSHI", "SWAMI", "SWAMP", "SWARM",
        "SWASH", "SWATH", "SWEAR", "SWEAT", "SWEEP", "SWEET", "SWELL", "SWEPT", "SWIFT", "SWILL",
        "SWINE", "SWING", "SWIRL", "SWISH", "SWOON", "SWOOP", "SWORD", "SWORE", "SWORN", "SWUNG",
        "SYNOD", "SYRUP", "TABBY", "TABLE", "TABOO", "TACIT", "TACKY", "TAFFY", "TAINT", "TAKEN",
        "TAKER", "TALLY", "TALON", "TAMER", "TANGO", "TANGY", "TAPER", "TAPIR", "TARDY", "TAROT",
        "TASTE", "TASTY", "TATTY", "TAUNT", "TAWNY", "TEACH", "TEARY", "TEASE", "TEDDY", "TEETH",
        "TEMPO", "TENET", "TENOR", "TENSE", "TENTH", "TEPEE", "TEPID", "TERRA", "TERSE", "TESTY",
        "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THETA", "THICK", "THIEF", "THIGH",
        "THING", "THINK", "THIRD", "THONG", "THORN", "THOSE", "THREE", "THREW", "THROB", "THROW",
        "THRUM", "THUMB", "THUMP", "THYME", "TIARA", "TIBIA", "TIDAL", "TIGER", "TIGHT", "TILDE",
        "TIMER", "TIMID", "TIPSY", "TITAN", "TITHE", "TITLE", "TOAST", "TODAY", "TODDY", "TOKEN",
        "TONAL", "TONGA", "TONIC", "TOOTH", "TOPAZ", "TOPIC", "TORCH", "TORSO", "TORUS", "TOTAL",
        "TOTEM", "TOUCH", "TOUGH", "TOWEL", "TOWER", "TOXIC", "TOXIN", "TRACE", "TRACK", "TRACT",
        "TRADE", "TRAIL", "TRAIN", "TRAIT", "TRAMP", "TRASH", "TRAWL", "TREAD", "TREAT", "TREND",
        "TRIAD", "TRIAL", "TRIBE", "TRICE", "TRICK", "TRIED", "TRILL", "TRIPE", "TRITE", "TROLL",
        "TROOP", "TROPE", "TROUT", "TROVE", "TRUCE", "TRUCK", "TRUER", "TRULY", "TRUMP", "TRUNK",
        "TRUSS", "TRUST", "TRUTH", "TRYST", "TUBAL", "TUBER", "TULIP", "TULLE", "TUMOR", "TUNIC",
        "TURBO", "TUTOR", "TWANG", "TWEAK", "TWEED", "TWEET", "TWICE", "TWINE", "TWIRL", "TWIST",
        "TWIXT", "TYING", "UDDER", "ULCER", "ULTRA", "UMBRA", "UNCLE", "UNCUT", "UNDER", "UNDID",
        "UNDUE", "UNFED", "UNFIT", "UNIFY", "UNION", "UNITE", "UNITY", "UNLIT", "UNMET", "UNSET",
        "UNTIE", "UNTIL", "UNWED", "UNZIP", "UPPER", "UPSET", "URBAN", "URINE", "USAGE", "USHER",
        "USING", "USUAL", "USURP", "UTILE", "UTTER", "VAGUE", "VALET", "VALID", "VALOR", "VALUE",
        "VALVE", "VAPID", "VAPOR", "VAULT", "VAUNT", "VEGAN", "VENOM", "VENUE", "VERGE", "VERSE",
        "VERSO", "VERVE", "VICAR", "VIDEO", "VIGIL", "VIGOR", "VILLA", "VINYL", "VIOLA", "VIPER",
        "VIRAL", "VIRUS", "VISIT", "VISOR", "VISTA", "VITAL", "VIVID", "VIXEN", "VOCAL", "VODKA",
        "VOGUE", "VOICE", "VOILA", "VOMIT", "VOTER", "VOUCH", "VOWEL", "VYING", "WACKY", "WAFER",
        "WAGER", "WAGON", "WAIST", "WAIVE", "WALTZ", "WARTY", "WASTE", "WATCH", "WATER", "WAVER",
        "WAXEN", "WEARY", "WEAVE", "WEDGE", "WEEDY", "WEIGH", "WEIRD", "WELCH", "WELSH", "WENCH",
        "WHACK", "WHALE", "WHARF", "WHEAT", "WHEEL", "WHELP", "WHERE", "WHICH", "WHIFF", "WHILE",
        "WHINE", "WHINY", "WHIRL", "WHISK", "WHITE", "WHOLE", "WHOOP", "WHOSE", "WIDEN", "WIDER",
        "WIDOW", "WIDTH", "WIELD", "WIGHT", "WILLY", "WIMPY", "WINCE", "WINCH", "WINDY", "WISER",
        "WISPY", "WITCH", "WITTY", "WOKEN", "WOMAN", "WOMEN", "WOODY", "WOOER", "WOOLY", "WOOZY",
        "WORDY", "WORLD", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WOVEN", "WRACK",
        "WRATH", "WREAK", "WRECK", "WREST", "WRING", "WRIST", "WRITE", "WRONG", "WROTE", "WRUNG",
        "WRYLY", "YACHT", "YEARN", "YEAST", "YIELD", "YOUNG", "YOUTH", "ZEBRA", "ZESTY", "ZONAL"
    ];

    // Game variables
    let targetWord = '';
    let currentRow = 0;
    let currentTile = 0;
    let isGameOver = false;
    let gameWon = false;

    // Stats variables
    let stats = {
        gamesPlayed: 0,
        gamesWon: 0,
        currentStreak: 0,
        maxStreak: 0,
        guessDistribution: [0, 0, 0, 0, 0, 0],
        lastPlayedDate: null
    };

    // Load stats from localStorage if available
    if (localStorage.getItem('wordleStats')) {
        stats = JSON.parse(localStorage.getItem('wordleStats'));
    }

    // DOM elements
    const gameBoard = document.getElementById('game-board');
    const keyboard = document.getElementById('keyboard');
    const toast = document.getElementById('toast');

    // Create game board
    function createGameBoard() {
        for (let i = 0; i < 6; i++) {
            const row = document.createElement('div');
            row.className = 'flex justify-center';

            for (let j = 0; j < 5; j++) {
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.dataset.row = i;
                tile.dataset.col = j;
                row.appendChild(tile);
            }

            gameBoard.appendChild(row);
        }
    }

    // Create keyboard
    function createKeyboard() {
        const rows = [
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
        ];

        const keyboardRows = document.querySelectorAll('.keyboard-row');

        rows.forEach((row, i) => {
            row.forEach(key => {
                const button = document.createElement('button');
                button.textContent = key;
                button.className = 'key';

                if (key === 'ENTER') {
                    button.classList.add('text-sm', 'px-2');
                    button.style.minWidth = '65px';
                } else if (key === 'BACK') {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="mx-auto"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>';
                    button.style.minWidth = '65px';
                }

                button.addEventListener('click', () => handleKeyPress(key));
                keyboardRows[i].appendChild(button);
            });
        });
    }

    // Start a new game
    function startNewGame() {
        // Clear the board
        const tiles = document.querySelectorAll('.tile');
        tiles.forEach(tile => {
            tile.textContent = '';
            tile.className = 'tile';
        });

        // Reset keyboard
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.className = 'key';
        });

        // Reset game variables
        currentRow = 0;
        currentTile = 0;
        isGameOver = false;
        gameWon = false;

        // Choose a new target word
        targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        console.log("Target word:", targetWord); // For debugging
    }

    // Handle key press
    function handleKeyPress(key) {
        if (isGameOver) return;

        if (key === 'ENTER') {
            submitGuess();
        } else if (key === 'BACK') {
            deleteLetter();
        } else if (/^[A-Z]$/.test(key) && currentTile < 5) {
            addLetter(key);
        }
    }

    // Add letter to current position
    function addLetter(letter) {
        if (currentTile < 5) {
            const tile = document.querySelector(`.tile[data-row="${currentRow}"][data-col="${currentTile}"]`);
            tile.textContent = letter;
            tile.classList.add('tile-filled');
            currentTile++;
        }
    }

    // Delete letter from current position
    function deleteLetter() {
        if (currentTile > 0) {
            currentTile--;
            const tile = document.querySelector(`.tile[data-row="${currentRow}"][data-col="${currentTile}"]`);
            tile.textContent = '';
            tile.classList.remove('tile-filled');
        }
    }

    // Submit current guess
    function submitGuess() {
        if (currentTile !== 5) {
            showToast("Not enough letters");
            shakeRow();
            return;
        }

        // Get the current guess
        let guess = '';
        for (let i = 0; i < 5; i++) {
            const tile = document.querySelector(`.tile[data-row="${currentRow}"][data-col="${i}"]`);
            guess += tile.textContent;
        }

        // Check if the guess is a valid word
        if (!WORDS.includes(guess)) {
            showToast("Not in word list");
            shakeRow();
            return;
        }

        // Check the guess against the target word
        const result = checkGuess(guess);

        // Update the tiles with the result
        updateTiles(result);

        // Update the keyboard
        updateKeyboard(guess, result);

        const today = new Date().toISOString().split('T')[0]; // Current date
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]; // 1 day ago
        const lastPlayed = stats.lastPlayedDate || today;

        // Check if the game is won
        if (guess === targetWord) {
            gameWon = true;
            isGameOver = true;

            stats.gamesPlayed++;
            stats.gamesWon++;
            stats.guessDistribution[currentRow]++;

            if (lastPlayed === yesterday) {
                stats.currentStreak++;
            } else if (lastPlayed === today && stats.currentStreak === 0) {
                stats.currentStreak = 1;
            }

            stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
            stats.lastPlayedDate = today;

            // Save stats
            localStorage.setItem('wordleStats', JSON.stringify(stats));

            // Show game over modal
            setTimeout(() => {
                showGameOverModal(true);
            }, 1500);

            return;
        }

        // Move to the next row
        currentRow++;
        currentTile = 0;

        // Check if the game is over
        if (currentRow === 6) {
            isGameOver = true;

            // Update stats
            stats.gamesPlayed++;
            stats.currentStreak = 0;

            // Save stats
            localStorage.setItem('wordleStats', JSON.stringify(stats));

            // Show game over modal
            setTimeout(() => {
                showGameOverModal(false);
            }, 1500);
        }
    }

    // Check guess against target word
    function checkGuess(guess) {
        const result = ['absent', 'absent', 'absent', 'absent', 'absent'];
        const targetLetters = targetWord.split('');
        const guessLetters = guess.split('');

        // First pass: mark correct letters
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === targetLetters[i]) {
                result[i] = 'correct';
                targetLetters[i] = null; // Mark as used
            }
        }

        // Second pass: mark present letters
        for (let i = 0; i < 5; i++) {
            if (result[i] === 'absent') {
                const index = targetLetters.indexOf(guessLetters[i]);
                if (index !== -1) {
                    result[i] = 'present';
                    targetLetters[index] = null; // Mark as used
                }
            }
        }

        return result;
    }

    // Update tiles with the result
    function updateTiles(result) {
        for (let i = 0; i < 5; i++) {
            const tile = document.querySelector(`.tile[data-row="${currentRow}"][data-col="${i}"]`);

            // Add a delay for the flip animation
            setTimeout(() => {
                tile.classList.add('flip');

                setTimeout(() => {
                    if (result[i] === 'correct') {
                        tile.classList.add('tile-correct');
                    } else if (result[i] === 'present') {
                        tile.classList.add('tile-present');
                    } else {
                        tile.classList.add('tile-absent');
                    }
                }, 250); // Half of the flip animation time
            }, i * 100); // Stagger the animations
        }
    }

    function updateKeyboard(guess, result) {
        for (let i = 0; i < 5; i++) {
            const letter = guess[i];
            const allKeys = document.querySelectorAll('.key');

            for (const keyElement of allKeys) {
                if (keyElement.textContent === letter) {
                    if (result[i] === 'correct') {
                        keyElement.className = 'key key-correct';
                    } else if (result[i] === 'present' && !keyElement.classList.contains('key-correct')) {
                        keyElement.className = 'key key-present';
                    } else if (result[i] === 'absent' &&
                        !keyElement.classList.contains('key-correct') &&
                        !keyElement.classList.contains('key-present')) {
                        keyElement.className = 'key key-absent';
                    }
                    break; // Stop after first match
                }
            }
        }
    }

    // Shake the current row
    function shakeRow() {
        const row = document.querySelector(`.tile[data-row="${currentRow}"][data-col="0"]`).parentElement;
        row.classList.add('shake');

        setTimeout(() => {
            row.classList.remove('shake');
        }, 500);
    }

    // Show toast message
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.style.opacity = '1';

        setTimeout(() => {
            toast.style.opacity = '0';
        }, 2000);
    }

    // Show game over modal
    function showGameOverModal(won) {
        const modal = document.getElementById('game-over-modal');
        const title = document.getElementById('game-over-title');
        const message = document.getElementById('game-over-message');
        const correctWord = document.getElementById('correct-word');

        if (won) {
            title.textContent = 'Congratulations!';
            message.textContent = `You guessed the word in ${currentRow + 1} ${currentRow === 0 ? 'try' : 'tries'}!`;

            // Add bounce animation to the winning row
            const winningRow = document.querySelector(`.tile[data-row="${currentRow}"][data-col="0"]`).parentElement;
            winningRow.classList.add('bounce');
        } else {
            title.textContent = 'Game Over';
            message.textContent = 'Better luck next time!';
        }

        correctWord.textContent = targetWord;
        modal.classList.remove('hidden');
    }

    // Update stats display
    function updateStatsDisplay() {
        document.getElementById('total-played').textContent = stats.gamesPlayed;
        document.getElementById('win-percentage').textContent = stats.gamesPlayed > 0 ?
            Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0;
        document.getElementById('current-streak').textContent = stats.currentStreak;
        document.getElementById('max-streak').textContent = stats.maxStreak;

        // Update guess distribution
        const distributionContainer = document.getElementById('guess-distribution');
        distributionContainer.innerHTML = '';

        const maxGuesses = Math.max(...stats.guessDistribution, 1);

        stats.guessDistribution.forEach((count, index) => {
            const row = document.createElement('div');
            row.className = 'flex items-center mb-1';

            const label = document.createElement('div');
            label.className = 'w-4 mr-2 text-center';
            label.textContent = index + 1;

            const bar = document.createElement('div');
            bar.className = 'flex-1 bg-gray-200 h-6 rounded-sm flex items-center';

            if (count > 0) {
                const fill = document.createElement('div');
                fill.className = 'bg-green-500 h-full rounded-sm flex items-center justify-end pr-2 text-white text-sm';
                fill.style.width = `${(count / maxGuesses) * 100}%`;
                fill.textContent = count;
                bar.appendChild(fill);
            }

            row.appendChild(label);
            row.appendChild(bar);
            distributionContainer.appendChild(row);
        });
    }

    // Event listeners for modals
    document.getElementById('help-btn').addEventListener('click', () => {
        document.getElementById('help-modal').classList.remove('hidden');
    });

    document.getElementById('stats-btn').addEventListener('click', () => {
        updateStatsDisplay();
        document.getElementById('stats-modal').classList.remove('hidden');
    });


    const nightModeBtn = document.getElementById('night-mode-btn');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    nightModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    });


    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.add('hidden');
            });
        });
    });

    document.getElementById('new-game-btn').addEventListener('click', () => {
        document.getElementById('stats-modal').classList.add('hidden');
        startNewGame();
    });

    document.getElementById('play-again-btn').addEventListener('click', () => {
        document.getElementById('game-over-modal').classList.add('hidden');
        startNewGame();
    });

    // Keyboard event listener
    document.addEventListener('keydown', (e) => {
        if (isGameOver) return;

        if (e.key === 'Enter') {
            submitGuess();
        } else if (e.key === 'Backspace') {
            deleteLetter();
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            addLetter(e.key.toUpperCase());
        }
    });

    // Initialize the game
    createGameBoard();
    createKeyboard();
    startNewGame();
});
