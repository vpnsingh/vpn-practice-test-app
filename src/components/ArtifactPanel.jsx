function ArtifactPanel({ title, meta, children, className = '', as: Tag = 'section', ...rest }) {
  return (
    <Tag className={`artifact ${className}`} {...rest}>
      {(title || meta) && (
        <div className="artifact-bar">
          <span className="artifact-dots" aria-hidden="true"><i /><i /><i /></span>
          {title && <span className="artifact-title">{title}</span>}
          {meta && <span className="artifact-meta">{meta}</span>}
        </div>
      )}
      <div className="artifact-body">{children}</div>
    </Tag>
  )
}

export default ArtifactPanel
