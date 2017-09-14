import React from 'react'
import { Card, Col, Row } from 'antd'

const Summary = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Profile" bordered={true}>Profile</Card>
    </Col>
    <Col span={8}>
      <Card title="Skill" bordered={true}>Skill</Card>
    </Col>
    <Col span={8}>
      <Card title="Project" bordered={true}>Project</Card>
    </Col>
  </Row>
)

export default Summary
