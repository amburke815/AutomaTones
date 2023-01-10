# AutomaTones - A _FA Music Generator
## Usage for CS3800:
<ul>
  <li><code>DeterministicFiniteAutomaton</code>($Q, \Sigma, \delta, q_0, F$) to create a DFA</li>
  <li>where 
    <ul> 
      <li>$Q$ is the set of accept states</li>, as a <code>[FAState]</code></li>
      <li>$\Sigma$ is the input alphabet</li>, as a <code>[string]</code></li>
      <li>$\delta$ is the transition function, as a <code>Map&lt;[FAState, string], FAState$gt;</code></li> to mirror the $Q \times \Sigma \rightarrow Q</code> signature</li>
      <li>$q_0$ is the initial state, as a <codE>[FAState]</code></li>
      <li>$F$ is the set of accept states, as a <code>[FAState]</code></li>
    </ul>
  </li>
</ul>
