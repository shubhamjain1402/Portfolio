import { ArrowDown, ArrowRight, BrainCircuit, Layers3 } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export default function ProjectWorkflow({ project }: { project: Project }) {
  if (!project.workflow) return null;
  return (
    <div
      className={`project-workflow ${project.accent}`}
      aria-label={`${project.name} workflow`}
    >
      <div className="workflow-top">
        <span className="eyebrow">{project.name} / System overview</span>
        <span className="workflow-dot" />
      </div>
      <div className="workflow-body">
        <div className="workflow-input">
          <span className="eyebrow">Input</span>
          <p>{project.workflow.input}</p>
        </div>
        <div className="workflow-connector" aria-hidden="true">
          <ArrowDown size={19} />
        </div>
        <div className="workflow-engine">
          <div className="engine-icon">
            <BrainCircuit size={29} strokeWidth={1.25} />
          </div>
          <div>
            <span className="eyebrow">Intelligence layer</span>
            <strong>{project.workflow.engine}</strong>
          </div>
          <Layers3 size={20} className="engine-layers" aria-hidden="true" />
        </div>
        <div className="workflow-connector" aria-hidden="true">
          <ArrowDown size={19} />
        </div>
        <div className="workflow-output">
          <span className="eyebrow">Output</span>
          {project.workflow.outputs.map((output) => (
            <div key={output}>
              <span>{output}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
      <div className="workflow-footer">
        <span>01 Input</span>
        <i />
        <span>02 Process</span>
        <i />
        <span>03 Outcome</span>
      </div>
    </div>
  );
}
