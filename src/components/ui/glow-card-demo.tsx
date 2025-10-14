import { GlowCard } from "@/components/ui/spotlight-card";

export function GlowCardDemo(){
  return(
    <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 custom-cursor">
      <GlowCard glowColor="green" size="sm">
        <div className="text-white">
          <h3 className="text-lg font-bold mb-2">Small Green Glow</h3>
          <p className="text-sm text-gray-300">Small size card with green glow effect</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="green" size="md">
        <div className="text-white">
          <h3 className="text-lg font-bold mb-2">Medium Green Glow</h3>
          <p className="text-sm text-gray-300">Medium size card with green glow effect</p>
        </div>
      </GlowCard>
      <GlowCard glowColor="green" size="lg">
        <div className="text-white">
          <h3 className="text-lg font-bold mb-2">Large Green Glow</h3>
          <p className="text-sm text-gray-300">Large size card with green glow effect</p>
        </div>
      </GlowCard>
    </div>
  );
};
