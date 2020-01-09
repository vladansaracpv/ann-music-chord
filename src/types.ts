import { NoteName } from 'ann-music-note';
import { PcProperties } from 'ann-music-pc';
import { IntervalName } from 'ann-music-interval';

export type ChordPc = Pick<PcProperties, 'pcnum' | 'chroma' | 'normalized'>;

export type ChordQuality = 'Major' | 'Minor' | 'Augmented' | 'Diminished' | 'Other' | 'Unknown';

// ChordType(pc: (pcnum, chroma, normalized), aliases, type, quality)
export interface ChordType {
  pc: ChordPc;
  type: string;
  aliases: string[];
  intervals: IntervalName[];
  quality: ChordQuality;
}

// ChordProps(...ChordType, tonic, name, notes, formula, valid)
export interface ChordProps extends ChordType {
  name: string;
  tonic: string;
  notes: NoteName[];
  formula: string;
  length: number;
  valid: boolean;
}
