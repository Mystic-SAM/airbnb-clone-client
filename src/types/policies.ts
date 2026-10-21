export interface PolicyItem {
  id: string;
  title: string;
  lines: string[];
  linkText: string;
  linkHref?: string;
}

export interface ThingsToKnowData {
  cancellationPolicy: PolicyItem;
  houseRules: PolicyItem;
  safetyAndProperty: PolicyItem;
}
