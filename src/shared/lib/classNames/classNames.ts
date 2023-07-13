type Mods = Record<string, boolean | string>;

export function classNames(main: string, mods?: Mods, additionals?: string[]): string {
  return [
    main,
    ...additionals,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}
