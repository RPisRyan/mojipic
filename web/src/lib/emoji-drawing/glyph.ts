import GraphemeSplitter from 'grapheme-splitter'

export type Glyph = string | null

export type GlyphMatrix = Array<Array<Glyph>>

const spaceChars = {
  U2003: ' ',
  U2008: ' ',
  U2009: ' ',
}

// Not sure about this one
// const blankGlyph_2008_2003 = spaceChars.U2008 + spaceChars.U2003

// Works pretty well, but causes some devices to 
//  avoid large emoji. This is probably because the
//  chars are text.
const blankGlyph_U2009_U2003 = spaceChars.U2009 + spaceChars.U2003

export const Glyph = {

  /**
   * Representation of empty Glyph in logic.
   */
  none: null as Glyph,

  /**
   * Empty Unicode space character sequence about the same width as an emoji.
   * For exporting serialized array.
   */
  space: blankGlyph_U2009_U2003 as Glyph,

  /**
   * White square emoji.
   * For exporting serialized array.
   */
  whiteSquare: '◻️' as Glyph,

  splitter: new GraphemeSplitter(),

  /**
   * Convenience method to cast a value as Glyph.
   */
  new(value: string): Glyph {
    return value as Glyph
  },

  /**
   * Normalize empty value to Glyph.none
   */
  normalized(value: string) {
    // Normalize empty glyphs to Glyph.none
    return Glyph.isEmpty(value) ? Glyph.none : value
  },

  /**
   * Is it equal to any of the empty glyph representations?
   */
  isEmpty(glyph: Glyph) {
    return glyph == null
      || glyph === ' '
      || glyph === Glyph.space
      || glyph === Glyph.whiteSquare
  }
}
