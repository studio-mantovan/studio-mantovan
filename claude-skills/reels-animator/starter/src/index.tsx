import { registerRoot } from 'remotion';
import React from 'react';
import { Composition } from 'remotion';
import { ReelComposition, SplitReelComposition } from './compositions';
import { REEL } from './tokens';
import { ReelProps } from './types';

const defaultProps: ReelProps = {
  videoSrc: 'esempio.mp4',
  brandHandle: '@studio.mantovan',
  accentColor: '#1A9EC9',
  durationSec: 30,
  transcript: [],
  animations: [],
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ReelComposition"
        component={ReelComposition}
        durationInFrames={900}
        fps={REEL.fps}
        width={REEL.width}
        height={REEL.height}
        defaultProps={defaultProps}
        calculateMetadata={({ props }) => ({
          durationInFrames: Math.round((props.durationSec ?? 30) * REEL.fps),
        })}
      />
      <Composition
        id="SplitReelComposition"
        component={SplitReelComposition}
        durationInFrames={900}
        fps={REEL.fps}
        width={REEL.width}
        height={REEL.height}
        defaultProps={defaultProps}
        calculateMetadata={({ props }) => ({
          durationInFrames: Math.round((props.durationSec ?? 30) * REEL.fps),
        })}
      />
    </>
  );
};

registerRoot(RemotionRoot);