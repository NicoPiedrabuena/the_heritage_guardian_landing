import React from 'react';

/**
 * TitleWithRule
 * Props:
 * - text | children: title content
 * - className, style: applied to the h2
 * - ruleWidth: string or number (if number -> percent)
 * - ruleGap: number (px)
 * - noRule: boolean
 * - ruleStyle: object for inline style of the rule
 * - centerRule: boolean to center the rule line
 */
export default function TitleWithRule({
  text,
  children,
  className = '',
  style = {},
  ruleWidth = '65%',
  ruleRelative = 'container', // 'container' | 'half' (50vw reference)
  ruleGap = 6,
  noRule = false,
  ruleStyle = {},
  centerRule = false,
  ...rest
}) {
  const content = text ?? children ?? null;

  // Compute width with support for relative to half viewport when ruleRelative==='half'
  let computedWidth;
  if (typeof ruleWidth === 'number') {
    if (ruleRelative === 'half') {
      // number is percentage of half the viewport -> e.g. 80 => 80% of 50vw = calc(50vw * .8)
      const pct = Math.max(0, Math.min(100, ruleWidth));
      computedWidth = `min(220px, calc(50vw * ${pct} / 100))`;
    } else {
      computedWidth = `${ruleWidth}%`;
    }
  } else if (typeof ruleWidth === 'string') {
    computedWidth = ruleWidth;
  } else {
    computedWidth = '65%';
  }

  return (
    <div className={`title-with-rule-root ${className}`.trim()} {...rest}>
      {content ? (
        <h2 className="title-with-rule-h2" style={style}>
          {content}
        </h2>
      ) : null}

      {!noRule && (
        <div
          className="title-with-rule-line"
          style={{
            width: computedWidth,
            height: 1,
            background: 'rgba(0,0,0,0.6)',
            marginTop: ruleGap,
            borderRadius: 2,
            marginLeft: centerRule ? 'auto' : undefined,
            marginRight: centerRule ? 'auto' : undefined,
            ...ruleStyle,
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
