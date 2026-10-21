import fs from 'fs';
import path from 'path';

function createExcalidrawDiagram() {
  let elementId = 1;
  const elements = [];

  function addRect(x, y, width, height, label, subtext, bgColor = '#1e293b', strokeColor = '#38bdf8', fillStyle = 'solid') {
    const id = `el_${elementId++}`;
    elements.push({
      id,
      type: 'rectangle',
      x,
      y,
      width,
      height,
      angle: 0,
      strokeColor,
      backgroundColor: bgColor,
      fillStyle,
      strokeWidth: 2,
      strokeStyle: 'solid',
      roughness: 0,
      opacity: 100,
      groupIds: [],
      roundness: { type: 3 },
      isDeleted: false
    });

    if (label) {
      elements.push({
        id: `el_${elementId++}`,
        type: 'text',
        x: x + 12,
        y: y + 10,
        width: width - 24,
        height: 20,
        angle: 0,
        strokeColor: '#ffffff',
        backgroundColor: 'transparent',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        groupIds: [],
        text: label,
        fontSize: 14,
        fontFamily: 1,
        textAlign: 'left',
        verticalAlign: 'top',
        isDeleted: false
      });
    }

    if (subtext) {
      elements.push({
        id: `el_${elementId++}`,
        type: 'text',
        x: x + 12,
        y: y + 32,
        width: width - 24,
        height: 36,
        angle: 0,
        strokeColor: '#94a3b8',
        backgroundColor: 'transparent',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        groupIds: [],
        text: subtext,
        fontSize: 11,
        fontFamily: 1,
        textAlign: 'left',
        verticalAlign: 'top',
        isDeleted: false
      });
    }

    return id;
  }

  function addArrow(startX, startY, endX, endY, label = '', strokeColor = '#38bdf8', isDashed = false) {
    elements.push({
      id: `el_${elementId++}`,
      type: 'arrow',
      x: startX,
      y: startY,
      width: endX - startX,
      height: endY - startY,
      angle: 0,
      strokeColor,
      backgroundColor: 'transparent',
      fillStyle: 'solid',
      strokeWidth: 2,
      strokeStyle: isDashed ? 'dashed' : 'solid',
      roughness: 0,
      opacity: 100,
      groupIds: [],
      points: [[0, 0], [endX - startX, endY - startY]],
      isDeleted: false
    });

    if (label) {
      elements.push({
        id: `el_${elementId++}`,
        type: 'text',
        x: (startX + endX) / 2 - 40,
        y: (startY + endY) / 2 - 14,
        width: 80,
        height: 16,
        angle: 0,
        strokeColor: '#cbd5e1',
        backgroundColor: 'transparent',
        fillStyle: 'solid',
        strokeWidth: 1,
        strokeStyle: 'solid',
        roughness: 0,
        opacity: 100,
        groupIds: [],
        text: label,
        fontSize: 10,
        fontFamily: 1,
        textAlign: 'center',
        verticalAlign: 'middle',
        isDeleted: false
      });
    }
  }

  // --- Title Header Banner ---
  addRect(50, 40, 1500, 70, 'VACATION RENTAL MARKETPLACE — PRODUCTION ARCHITECTURE', 'Enterprise Scalable System Design • Multi-Region Edge • Kubernetes Microservices • Event-Driven Storage (99.99% SLA)', '#0f172a', '#ff385c');

  // --- 1. Client & Edge Tier ---
  addRect(50, 130, 420, 240, '1. CLIENT & EDGE DELIVERY TIER', '', '#0f172a', '#ff385c');
  addRect(70, 170, 380, 80, '🖥️ React 19 + TypeScript SPA Client', 'Desktop Web Client • Client Routing & State\nKeyboard A11y • Local Asset Cache', '#1e293b', '#ff385c');
  addRect(70, 265, 380, 85, '🌐 Vercel Edge Network / CDN', 'Global Anycast PoPs • SSL/TLS Offload • WAF\nStatic Asset Caching • WebP Optimizer', '#1e293b', '#38bdf8');

  // --- CI/CD Pipeline ---
  addRect(50, 390, 420, 180, '🚀 CI/CD & DEPLOYMENT PIPELINE', '', '#0f172a', '#22c55e');
  addRect(70, 430, 380, 60, '📦 GitHub Repository', 'Monorepo • Branch Protection • Secret Vault', '#1e293b', '#cbd5e1');
  addRect(70, 500, 380, 60, '⚙️ GitHub Actions CI/CD', 'Lint & Typecheck • Tests • Vercel Deploy & Docker Build', '#1e293b', '#22c55e');

  // --- 2. API Gateway & Traffic Management ---
  addRect(520, 130, 680, 75, '2. API GATEWAY / LOAD BALANCER (Kong / Envoy)', 'JWT Authentication & RBAC • Token Bucket Rate Limiting • Circuit Breakers • SSL Offloading • gRPC Transcoding', '#0f172a', '#06b6d4');

  // --- 3. Core Microservices Tier (Kubernetes Cluster) ---
  addRect(520, 220, 680, 350, '3. CORE MICROSERVICES TIER (Stateless Kubernetes / ECS)', '', '#0f172a', '#3b82f6');
  
  // 8 Service boxes
  addRect(540, 260, 150, 70, '🔐 Auth Service', 'OAuth2, JWT, Sessions\nGo / Redis', '#1e293b', '#a855f7');
  addRect(705, 260, 150, 70, '🏠 Listing Service', '43-photo gallery, amenities\nGo / PostgreSQL', '#1e293b', '#ff385c');
  addRect(870, 260, 150, 70, '🔍 Search Service', 'Geo queries, filters\nJava / OpenSearch', '#1e293b', '#06b6d4');
  addRect(1035, 260, 150, 70, '📅 Booking Service', 'Calendar lock, Redlock\nGo / PostgreSQL', '#1e293b', '#3b82f6');

  addRect(540, 345, 150, 70, '💳 Payment Service', 'Stripe, escrow, payouts\nGo / PCI-DSS Vault', '#1e293b', '#22c55e');
  addRect(705, 345, 150, 70, '⭐ Review Service', 'Ratings aggregation, math\nNode.js / PostgreSQL', '#1e293b', '#eab308');
  addRect(870, 345, 150, 70, '👤 Host Profile', 'Superhost status, co-hosts\nNode.js / PostgreSQL', '#1e293b', '#f97316');
  addRect(1035, 345, 150, 70, '🔔 Notifications', 'WebSockets, SMS, Email\nRust / Push Worker', '#1e293b', '#ec4899');

  // Async Event Bus
  addRect(540, 430, 645, 60, '⚡ 4. Asynchronous Event Bus (Apache Kafka / RabbitMQ)', 'Topics: listing.updated • booking.confirmed • payment.succeeded • review.submitted', '#3b0764', '#c084fc');
  addRect(540, 500, 645, 55, '⚙️ Async Workers & Consumers', 'Search Indexer • Email/SMS Dispatcher • Cache Invalidator • Image Transcoder', '#1e293b', '#a855f7');

  // --- 4. Storage & Persistence Tier ---
  addRect(520, 590, 680, 260, '5. DATA PERSISTENCE & STORAGE LAYER (Multi-AZ High Availability)', '', '#0f172a', '#22c55e');
  addRect(540, 630, 150, 95, '🐘 Primary DB (Master)', 'Aurora PostgreSQL\nMulti-AZ Synchronous\nACID Transactions', '#1e293b', '#22c55e');
  addRect(705, 630, 150, 95, '📖 Read Replicas', 'Aurora Read Replicas\nPgBouncer Pool\nRead Scale-out', '#1e293b', '#3b82f6');
  addRect(870, 630, 150, 95, '⚡ Redis Cluster', 'In-memory Cache\nRate Limit Counters\nSession & Locks', '#1e293b', '#ef4444');
  addRect(1035, 630, 150, 95, '🔎 OpenSearch', 'Elasticsearch Cluster\nGeo-spatial indexing\nFaceted search', '#1e293b', '#06b6d4');

  addRect(540, 740, 315, 90, '📦 Object Storage (S3 / R2)', '43+ Property Gallery Images • WebP Transformations • CDN Origin', '#1e293b', '#eab308');
  addRect(870, 740, 315, 90, '🔄 Backup & Disaster Recovery', 'Continuous Aurora PITR • Cross-Region S3 Replication • RTO < 15m', '#1e293b', '#22c55e');

  // --- 5. Operations, Security & Observability ---
  addRect(1240, 130, 310, 720, '6. OPERATIONS, SECURITY & OBSERVABILITY', '', '#0f172a', '#a855f7');
  addRect(1260, 170, 270, 120, '📈 Scaling Strategy', '• Horizontal Pod Autoscaler (HPA)\n• Multi-Zone Redundancy\n• Distributed Redlock (Double Booking)\n• Database Read/Write Splitting\n• Edge Caching for Static & Media', '#1e293b', '#38bdf8');
  addRect(1260, 305, 270, 120, '📊 Observability & APM', '• Datadog / OpenTelemetry Tracing\n• Prometheus Metrics & Grafana\n• ELK / CloudWatch Log Aggregator\n• PagerDuty Automated Alerts\n• Synthetic Health Probes', '#1e293b', '#a855f7');
  addRect(1260, 440, 270, 120, '🛡️ Security & Governance', '• AWS Secrets Manager / Vault\n• Mutual TLS (mTLS) Inter-service\n• PCI-DSS Level 1 Payment Vault\n• GDPR Compliance & Data Isolation\n• Continuous SAST / DAST Scans', '#1e293b', '#22c55e');
  addRect(1260, 575, 270, 120, '⚡ Rate Limiting & Resilience', '• Token Bucket Algorithm (Redis)\n• API Gateway Throttling per IP/User\n• Circuit Breaker (Resilience4j/Envoy)\n• Graceful Degradation\n• Chaos Engineering Drills', '#1e293b', '#ef4444');
  addRect(1260, 710, 270, 120, '🌐 Global Infrastructure', '• AWS / Multi-Region Deployment\n• Kubernetes Cluster (EKS/GKE)\n• Cloudflare Anycast CDN\n• Infrastructure as Code (Terraform)', '#1e293b', '#06b6d4');

  // --- Arrows & Data Flows ---
  addArrow(450, 210, 520, 160, 'HTTPS / SSL', '#38bdf8');
  addArrow(860, 205, 860, 220, 'gRPC / HTTP', '#38bdf8');
  addArrow(860, 570, 860, 590, 'SQL / Read / Write', '#22c55e');
  addArrow(450, 460, 520, 460, 'CI Trigger', '#22c55e', true);

  const excalidrawDoc = {
    type: 'excalidraw',
    version: 2,
    source: 'https://excalidraw.com',
    elements,
    appState: {
      viewBackgroundColor: '#0a0f1d',
      gridSize: 20
    },
    files: {}
  };

  const outputPath = path.resolve('docs/architecture-diagram.excalidraw');
  fs.writeFileSync(outputPath, JSON.stringify(excalidrawDoc, null, 2), 'utf-8');
  console.log(`Created Excalidraw diagram at: ${outputPath}`);
}

createExcalidrawDiagram();
