const { sql } = require('@vercel/postgres');
const fs = require('fs');
const path = require('path');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🚀 Initializing ICAV Time Tracker database on Neon...');
    
    // Read the schema file
    const schemaPath = path.join(process.cwd(), '../Database/schema_v2.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    console.log(`Found ${statements.length} SQL statements to execute`);
    
    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        console.log(`[${i + 1}/${statements.length}] Executing: ${statement.substring(0, 60)}...`);
        try {
          await sql`${statement}`;
        } catch (error) {
          // Some statements might fail if they already exist (like extensions)
          if (error.message.includes('already exists')) {
            console.log(`  ⚠️  Statement already exists, skipping...`);
          } else {
            throw error;
          }
        }
      }
    }
    
    console.log('✅ Database initialized successfully on Neon!');
    
    res.status(200).json({ 
      success: true, 
      message: 'Database initialized successfully',
      usersCreated: [
        { username: 'admin', password: 'admin123', role: 'admin' },
        { username: 'john.doe', password: 'tech123', role: 'tech' },
        { username: 'jane.smith', password: 'tech123', role: 'tech' },
        { username: 'mike.johnson', password: 'tech123', role: 'tech' },
        { username: 'sarah.wilson', password: 'tech123', role: 'tech' },
        { username: 'david.brown', password: 'tech123', role: 'tech' }
      ]
    });
    
  } catch (error) {
    console.error('❌ Error initializing database:', error);
    res.status(500).json({ 
      error: 'Failed to initialize database', 
      details: error.message 
    });
  }
} 