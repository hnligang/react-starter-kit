 /*
  create by ligang on 2018-03-30 10:25:42
 */
import React, { Component } from 'react'

export default class GitCommonCommands extends Component {
  render() {
    return (
      <div style={{width: 800}}>
        <h1 id="git常用命令">git常用命令</h1>
        <h3 id="创建本地分支">创建本地分支</h3>
        <pre className="prettyprint hljs-dark">
          <code className="hljs nginx">
            <div className="hljs-line">
              <span className="hljs-attribute">git</span> branch
              <span className="hljs-string">'branch-name'</span>
            </div>
          </code>
        </pre>

        <h3 id="切换到分支">切换到分支</h3>
        <pre className="prettyprint hljs-dark">
          <code className="hljs nginx">
            <div className="hljs-line">
              <span className="hljs-attribute">git</span> checkout
              <span className="hljs-string">'banrch-name'</span>  
            </div>
          </code>
        </pre>



<h3 id="创建分支并切换到分支">创建分支并切换到分支</h3>



<pre className="prettyprint hljs-dark"><code className="hljs stylus"><div className="hljs-line">git checkout -<span className="hljs-selector-tag">b</span> <span className="hljs-string">'branch-name'</span>
</div></code></pre>



<h3 id="删除本地分支">删除本地分支</h3>



<pre className="prettyprint hljs-dark"><code className="hljs mathematica"><div className="hljs-line">git branch -<span className="hljs-keyword">D</span> <span className="hljs-string">'branch-name'</span>
</div></code></pre>



<h3 id="提交到本地仓库">提交到本地仓库</h3>



<pre className="prettyprint hljs-dark"><code className="hljs nginx"><div className="hljs-line"><span className="hljs-attribute">git</span> commit -am <span className="hljs-string">'instruction'</span>
</div></code></pre>

<p>如果有新建文件，用下面命令提交</p>



<pre className="prettyprint hljs-dark"><code className="hljs dockerfile"><div className="hljs-line">git <span className="hljs-keyword">add</span><span className="bash"> .
</span></div><div className="hljs-line">git commit -m <span className="hljs-string">'instruction'</span>
</div></code></pre>



<h3 id="提交远程分支之前拉取开发分支代码">提交远程分支之前拉取开发分支代码</h3>

<p>提交远程仓库之前，<code>必须从远程开发分支拉取代码，并解决冲突</code></p>



<pre className="prettyprint hljs-dark"><code className="hljs ebnf"><div className="hljs-line"><span className="hljs-attribute"> git pull origin dev</span>
</div></code></pre>

<p>解决冲突之后，用上面命令<code>再次提交代码</code></p>



<h3 id="提交远程分支">提交远程分支</h3>



<pre className="prettyprint hljs-dark"><code className="hljs gradle"><div className="hljs-line"><span className="hljs-comment">// 如果远程没有该分支，则创建新的远程分支</span>
</div><div className="hljs-line">git <span className="hljs-keyword">push</span> origin <span className="hljs-string">'my-origin-branch'</span>
</div></code></pre>



  <h3 id="删除远程分支">删除远程分支</h3>



  <pre className="prettyprint hljs-dark">
    <code className="hljs maxima">
      <div className="hljs-line">git
        <span className="hljs-built_in">push</span>
        <span className="hljs-built_in">origin
        </span> --<span className="hljs-built_in">delete</span> '
        <span className="hljs-built_in">origin</span>-branch-name'
      </div>
    </code>
  </pre>
</div>
)
  }
}
