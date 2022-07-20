export type Variants =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'danger'
	| 'warning'
	| 'success'
	| 'bgPrimary'
	| 'bgSecondary'
	| 'bgTertiary'
	| 'textPrimary'
	| 'border';

export interface Theme {
	colors: Record<Variants, string>;
	name: string;
}
