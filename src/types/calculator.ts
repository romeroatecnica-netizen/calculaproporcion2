export type ModuleId = 'percentages' | 'distribution' | 'rule-of-three';

export type NumberFormatMode = 'es' | 'us';
export type CurrencyMode = 'EUR' | 'USD' | 'NONE';

export type PercentageSubMode =
  | 'inverse-discount'
  | 'tax-remove'
  | 'tax-add'
  | 'part-of-whole'
  | 'pct-change';

export interface PercentagesState {
  subMode: PercentageSubMode;
  amount: string;
  rate: string;
  valueA: string;
  valueB: string;
  activePresetId: string | null;
}

export type DistributionMode = 'percentage' | 'weight';

export interface ParticipantItem {
  id: string;
  name: string;
  value: string;
}

export interface DistributionState {
  totalAmount: string;
  concept: string;
  mode: DistributionMode;
  weightUnit: string;
  participants: ParticipantItem[];
}

export type RuleOfThreeType = 'direct' | 'inverse';

export interface RuleOfThreeState {
  type: RuleOfThreeType;
  a: string;
  b: string;
  c: string;
  unitA: string;
  unitB: string;
  activeExampleId: string | null;
}

export interface AppState {
  activeModule: ModuleId;
  numberFormat: NumberFormatMode;
  currency: CurrencyMode;
  percentages: PercentagesState;
  distribution: DistributionState;
  ruleOfThree: RuleOfThreeState;
}

export interface SeoContext {
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  contextLabel: string;
}
