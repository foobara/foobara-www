import React, { useState } from 'react'
import './BeforeAfterComparison.css'

interface CodeExample {
  filename: string
  code: string
  language: string
}

const withoutFoobaraExamples: CodeExample[] = [
  {
    filename: 'cli_handler.rb',
    code: `class CliHandler
  def greet(name)
    validate_name!(name)
    result = "Hello, #{name}!"
    puts result
  end
end`,
    language: 'ruby'
  },
  {
    filename: 'api_controller.rb',
    code: `class ApiController
  def greet
    name = params[:name]
    validate_name!(name)
    render json: { message: "Hello, #{name}!" }
  end
end`,
    language: 'ruby'
  },
  {
    filename: 'job_worker.rb',
    code: `class GreetJob
  def perform(name)
    validate_name!(name)
    result = "Hello, #{name}!"
    store_result(result)
  end
end`,
    language: 'ruby'
  }
]

const withFoobaraExample: CodeExample = {
  filename: 'greet.rb',
  code: `class Greet < Foobara::Command
  inputs name: :string
  result :string

  def execute
    "Hello, #{name}!"
  end
end`,
  language: 'ruby'
}

const connectorOutputs = [
  { name: 'CLI', icon: '>' },
  { name: 'HTTP API', icon: '{ }' },
  { name: 'MCP Tools', icon: '🔧' },
  { name: 'Background Jobs', icon: '⚡' },
  { name: 'TypeScript SDK', icon: 'TS' }
]

export default function BeforeAfterComparison () {
  const [showWithFoobara, setShowWithFoobara] = useState(false)

  return (
    <div className="before-after-container">
      <h2>The Difference is Clear</h2>
      <p className="comparison-subtitle">
        See how Foobara eliminates integration code duplication
      </p>

      {/* Toggle Switch */}
      <div className="toggle-container">
        <button
          className={`toggle-option ${!showWithFoobara ? 'active' : ''}`}
          onClick={() => { setShowWithFoobara(false) }}
        >
          Without Foobara
        </button>
        <button
          className={`toggle-option ${showWithFoobara ? 'active' : ''}`}
          onClick={() => { setShowWithFoobara(true) }}
        >
          With Foobara
        </button>
        <div className={`toggle-indicator ${showWithFoobara ? 'right' : 'left'}`} />
      </div>

      {/* Content Area */}
      <div className="comparison-content">
        {/* Without Foobara View */}
        <div className={`view-panel without-panel ${!showWithFoobara ? 'active' : ''}`}>
          <div className="panel-header">
            <span className="status-badge warning">Repetitive</span>
            <h3>Same logic, written 3+ times</h3>
          </div>
          <div className="code-cards-grid">
            {withoutFoobaraExamples.map((example, index) => (
              <div
                key={example.filename}
                className="code-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="code-card-header">
                  <span className="filename">{example.filename}</span>
                </div>
                <pre className="code-block">
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}
          </div>
          <div className="pain-points">
            <div className="pain-point">
              <span className="pain-icon">⚠️</span>
              <span>Logic duplicated across files</span>
            </div>
            <div className="pain-point">
              <span className="pain-icon">⚠️</span>
              <span>Validation repeated everywhere</span>
            </div>
            <div className="pain-point">
              <span className="pain-icon">⚠️</span>
              <span>Changes require multiple updates</span>
            </div>
          </div>
        </div>

        {/* With Foobara View */}
        <div className={`view-panel with-panel ${showWithFoobara ? 'active' : ''}`}>
          <div className="panel-header">
            <span className="status-badge success">Clean</span>
            <h3>One command, infinite connections</h3>
          </div>
          <div className="foobara-flow">
            <div className="single-command-card">
              <div className="code-card-header">
                <span className="filename">{withFoobaraExample.filename}</span>
                <span className="file-badge">Only file you need</span>
              </div>
              <pre className="code-block">
                <code>{withFoobaraExample.code}</code>
              </pre>
            </div>

            <div className="flow-arrow">
              <div className="arrow-line" />
              <div className="arrow-label">Connects to</div>
              <div className="arrow-line" />
            </div>

            <div className="outputs-grid">
              {connectorOutputs.map((output, index) => (
                <div
                  key={output.name}
                  className="output-card"
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  <span className="output-icon">{output.icon}</span>
                  <span className="output-name">{output.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits">
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <span>Write once, use everywhere</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <span>Self-documenting commands</span>
            </div>
            <div className="benefit">
              <span className="benefit-icon">✓</span>
              <span>Add integrations without code changes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
