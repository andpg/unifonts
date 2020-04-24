const getLatin = code => {
  let r = [...Array(52).keys()].map(i => String.fromCharCode(55349,56320 + 52*code + i));
  switch (code) {
    case 1: r[33] = 'ℎ'; break;
    case 3: [r[1], r[4], r[5], r[7], r[8], r[11], r[12], r[17], r[30], r[32], r[40]] = [...'ℬℰℱℋℐℒℳℛℯℊℴ']; break;
    case 5: [r[2], r[7], r[8], r[17], r[25]] = [...'ℭℌℑℜℨ']; break;
    case 6: [r[2], r[7], r[13], r[15], r[16], r[17], r[25]] = [...'ℂℍℕℙℚℝℤ']; break;
  }
  return r;
}
const getGreek = code => [...Array(51).keys()].map(i => String.fromCharCode(55349,57000 + 58*code + i));
const getDigits = code => [...Array(10).keys()].map(i => String.fromCharCode(55349,57294 + 10*code + i));

export const simple = {
  latin: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'],
  greek: [...'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡϴΣΤΥΦΧΨΩ∇αβγδεζηθικλμνξοπρςστυφχψω'],
  digits: [...'0123456789'],
  punctuation: [...'!"#$%&\\\'()*+,-./:;<=>?@[\\]^_`{|}~ '],
};

export const math = {
  'b': {
    latin: getLatin(0),
    greek: getGreek(0),
    digits: getDigits(0),
  },
  'i': {
    latin: getLatin(1),
    greek: getGreek(1),
  },
  'b i': {
    latin: getLatin(2),
    greek: getGreek(2),
  },
  'scrp': {
    latin: getLatin(3), // faltan BEFHILMRego
  },
  'scrp b': {
    latin: getLatin(4),
  },
  'frak': {
    latin: getLatin(5),
  },
  'doub': {
    latin: getLatin(6),
    digits: getDigits(1),
  },
  'frak b': {
    latin: getLatin(7),
  },
  'sans': {
    latin: getLatin(8),
    digits: getDigits(2),
  },
  'sans b': {
    latin: getLatin(9),
    greek: getGreek(3),
    digits: getDigits(3),
  },
  'sans i':{
    latin: getLatin(10),
  },
  'sans b i': {
    latin: getLatin(11),
  },
  'mono': {
    latin: getLatin(12),
    digits: getDigits(4),
  },
};

export const fonts = {
  small: {
    latin: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡ𝗑ʏᴢ'],
  },
  full: {
    latin: [...'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ'],
    digits: [...'０１２３４５６７８９'],
    punctuation: [...'！＂＃＄％＆＼＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～ '],
  },
  ...math,
};

export const name = {
  'small': 'Small Capital Font',
  'full': 'Full-Width Font',
  'b': 'Bold Font',
  'i': 'Italic Font',
  'b i': 'Bold Italic Font',
  'scrp': 'Script Font',
  'scrp b': 'Bold Script Font',
  'doub': 'Outlined Font',
  'frak': 'Fraktur Font',
  'frak b': 'Bold Fraktur Font',
  'sans': 'Sans Serif Font',
  'sans b': 'Bold Sans Serif Font',
  'sans i': 'Italic Sans Serif Font',
  'sans b i': 'Bold Italic Sans Serif Font',
  'mono': 'Monospace Font',
}