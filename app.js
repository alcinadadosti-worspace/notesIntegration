const { useState, useMemo, useEffect, useCallback } = React;

// ==================== SUPABASE CONFIG ====================
const SUPABASE_URL = 'https://pixdoetztnsnthizohhl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_twrEJdPhJKbAAGN_eoNw8g_LzfDejjc';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==================== ICONES ====================
const Upload = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

const Settings = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const Download = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Search = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const Package = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16.5 9.4 7.55 4.24"></path>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.29 7 12 12 20.71 7"></polyline>
    <line x1="12" y1="22" x2="12" y2="12"></line>
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const Trash2 = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
);

const LogOut = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1-2 2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
);

const Loader = ({ className }) => (
  <svg className={`animate-spin ${className || ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
);

// Mapeamento de unidades
const UNITS = {
  '13706': { name: 'VD Palmeira dos Indios', unidade: 'palmeira' },
  '13707': { name: 'VD Penedo', unidade: 'penedo' },
};

const ADMIN_UNITS = {
  '1515': { name: 'VD Palmeira dos Indios', unidade: 'palmeira' },
  '1048': { name: 'VD Penedo', unidade: 'penedo' },
};

// ==================== TELA DE LOGIN ====================
const LoginScreen = ({ onLogin, onAdminClick }) => {
  const [unitCode, setUnitCode] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const unit = UNITS[unitCode.trim()];
    if (unit) {
      onLogin(unitCode.trim(), unit);
    } else {
      setError('Codigo de unidade invalido!');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 flex items-center justify-center p-6 relative">
      <button
        onClick={onAdminClick}
        className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors text-sm flex items-center gap-2 font-light shadow-md"
      >
        <Settings className="w-4 h-4" />
        Admin
      </button>

      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 max-w-md w-full border border-pink-100">
        <div className="text-center mb-8">
          <Package className="w-16 h-16 text-pink-400 mx-auto mb-4" />
          <h1 className="text-3xl font-light text-pink-600 mb-2">Mercadorias</h1>
          <p className="text-pink-400 font-light text-sm">Digite o codigo da sua unidade para acessar</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-pink-600 mb-2 font-light">Codigo da Unidade</label>
            <input
              type="text"
              value={unitCode}
              onChange={(e) => setUnitCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-4 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none bg-white/50 text-center text-2xl tracking-widest font-light"
              placeholder="00000"
              maxLength={5}
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <p className="text-red-500 text-sm font-light">{error}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full px-4 py-4 rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 text-white hover:from-pink-500 hover:to-pink-600 transition-all shadow-lg font-light text-lg"
          >
            Acessar
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-pink-100">
          <p className="text-pink-300 text-xs font-light text-center">Unidades disponiveis: Palmeira dos Indios e Penedo</p>
        </div>
      </div>
    </div>
  );
};

// ==================== TELA ADMIN LOGIN ====================
const AdminLoginScreen = ({ onBack, onAdminLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'BOT' && password === '303040') {
      onAdminLogin();
    } else {
      setError('Credenciais invalidas!');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 max-w-md w-full border border-purple-100">
        <div className="text-center mb-8">
          <Settings className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h1 className="text-3xl font-light text-purple-600 mb-2">Area Administrativa</h1>
          <p className="text-purple-400 font-light text-sm">Acesso restrito</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-purple-600 mb-2 font-light">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none bg-white/50 font-light"
              placeholder="Digite o usuario"
            />
          </div>
          <div>
            <label className="block text-sm text-purple-600 mb-2 font-light">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none bg-white/50 font-light"
              placeholder="Digite a senha"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
              <p className="text-red-500 text-sm font-light">{error}</p>
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full px-4 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg font-light text-lg"
          >
            Entrar
          </button>
          <button
            onClick={onBack}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-light"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== PAINEL ADMIN ====================
const AdminPanel = ({ onBack }) => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [unitCode, setUnitCode] = useState('');
  const [error, setError] = useState('');
  const [notification, setNotification] = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleUnitSelect = () => {
    const unit = ADMIN_UNITS[unitCode.trim()];
    if (unit) {
      setSelectedUnit({ code: unitCode.trim(), ...unit });
      setError('');
    } else {
      setError('Codigo de unidade invalido!');
      setTimeout(() => setError(''), 3000);
    }
  };

  // Buscar contagem de itens da unidade
  const fetchItemCount = useCallback(async () => {
    if (!selectedUnit) return;
    try {
      const { count, error } = await supabaseClient
        .from('mercadorias')
        .select('*', { count: 'exact', head: true })
        .eq('unidade', selectedUnit.unidade);
      if (!error) setItemCount(count || 0);
    } catch {}
  }, [selectedUnit]);

  useEffect(() => {
    fetchItemCount();
  }, [fetchItemCount]);

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file || !selectedUnit) return;

    setLoading(true);
    setUploadProgress('Lendo arquivo...');

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const text = e.target?.result;

        let separator = ',';
        const firstLine = text.split('\n')[0];
        const semicolonCount = (firstLine.match(/;/g) || []).length;
        const commaCount = (firstLine.match(/,/g) || []).length;
        const tabCount = (firstLine.match(/\t/g) || []).length;

        if (semicolonCount > commaCount && semicolonCount > tabCount) {
          separator = ';';
        } else if (tabCount > commaCount && tabCount > semicolonCount) {
          separator = '\t';
        }

        const lines = text.split('\n').filter(line => line.trim());

        if (lines.length < 2) {
          showNotification('error', 'Arquivo CSV vazio ou invalido');
          setLoading(false);
          setUploadProgress(null);
          return;
        }

        const rawHeaders = lines[0].split(separator);
        const headers = rawHeaders.map(h =>
          h.trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, ' ')
        );

        const docIndex = headers.findIndex(h =>
          h.includes('numero') && h.includes('documento')
        );

        let dateIndex = headers.findIndex(h =>
          h.includes('data') && h.includes('entrada')
        );
        if (dateIndex === -1) {
          dateIndex = headers.findIndex(h =>
            h.includes('data') && h.includes('emissao')
          );
        }

        const codeIndex = headers.findIndex(h =>
          h.includes('codigo') && h.includes('produto')
        );
        const descIndex = headers.findIndex(h =>
          h.includes('descri') && h.includes('produto')
        );

        let qtyIndex = headers.findIndex(h => {
          const normalized = h.replace(/\s+/g, ' ').trim();
          return normalized === 'quantidade de itens' || normalized === 'qtd de itens' || normalized === 'qtde de itens';
        });

        if (qtyIndex === -1) {
          qtyIndex = headers.findIndex(h =>
            h.includes('quantidade') && !h.includes('unidade')
          );
        }

        if ([docIndex, dateIndex, codeIndex, descIndex, qtyIndex].some(i => i === -1)) {
          const missing = [];
          if (docIndex === -1) missing.push('Numero do Documento');
          if (dateIndex === -1) missing.push('Data de entrada/emissao');
          if (codeIndex === -1) missing.push('Codigo do produto');
          if (descIndex === -1) missing.push('Descricao Produto');
          if (qtyIndex === -1) missing.push('Quantidade');

          showNotification('error', `Colunas nao encontradas: ${missing.join(', ')}`);
          setLoading(false);
          setUploadProgress(null);
          return;
        }

        setUploadProgress('Processando itens...');

        const newItems = [];
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;

          const values = line.split(separator).map(v => v.trim().replace(/^["']|["']$/g, ''));
          if (values.length < 3) continue;

          let quantityStr = values[qtyIndex] || '0';
          quantityStr = quantityStr.replace(/\./g, '');
          quantityStr = quantityStr.replace(/,.*$/, '');
          const quantity = parseInt(quantityStr) || 0;

          let productCode = values[codeIndex] || '';
          productCode = productCode.replace(/^0+/, '') || '0';

          newItems.push({
            unidade: selectedUnit.unidade,
            document_number: values[docIndex] || 'N/A',
            entry_date: values[dateIndex] || '',
            product_code: productCode,
            product_description: values[descIndex] || '',
            quantity: quantity
          });
        }

        if (newItems.length === 0) {
          showNotification('error', 'Nenhum item valido encontrado no CSV');
          setLoading(false);
          setUploadProgress(null);
          return;
        }

        // Inserir em lotes de 1000 para nao estourar limite
        const BATCH_SIZE = 1000;
        let inserted = 0;

        for (let i = 0; i < newItems.length; i += BATCH_SIZE) {
          const batch = newItems.slice(i, i + BATCH_SIZE);
          setUploadProgress(`Enviando ${inserted + batch.length} de ${newItems.length} itens...`);

          const { error: insertError } = await supabaseClient
            .from('mercadorias')
            .insert(batch);

          if (insertError) {
            showNotification('error', `Erro ao salvar no banco: ${insertError.message}`);
            setLoading(false);
            setUploadProgress(null);
            return;
          }

          inserted += batch.length;
        }

        showNotification('success', `${newItems.length} itens importados para ${selectedUnit.name}!`);
        fetchItemCount();
        event.target.value = '';
      } catch (error) {
        showNotification('error', 'Erro ao processar CSV: ' + error);
      }

      setLoading(false);
      setUploadProgress(null);
    };

    reader.onerror = () => {
      showNotification('error', 'Erro ao ler o arquivo');
      setLoading(false);
      setUploadProgress(null);
    };

    reader.readAsText(file, 'ISO-8859-1');
  };

  const handleClearUnit = async () => {
    if (!selectedUnit) return;
    setLoading(true);
    setShowClearConfirm(false);

    try {
      const { error } = await supabaseClient
        .from('mercadorias')
        .delete()
        .eq('unidade', selectedUnit.unidade);

      if (error) {
        showNotification('error', `Erro ao limpar dados: ${error.message}`);
      } else {
        showNotification('success', `Dados de ${selectedUnit.name} limpos com sucesso!`);
        setItemCount(0);
      }
    } catch (err) {
      showNotification('error', 'Erro ao limpar dados');
    }

    setLoading(false);
  };

  // Tela de selecao de unidade
  if (!selectedUnit) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 flex items-center justify-center p-6">
        {notification && (
          <div className={`fixed top-6 right-6 z-50 p-4 rounded-xl shadow-lg border-2 ${
            notification.type === 'success'
              ? 'bg-green-50 border-green-300 text-green-700'
              : 'bg-red-50 border-red-300 text-red-700'
          }`}>
            <div className="flex items-center gap-3">
              {notification.type === 'success' ? '✅' : '❌'}
              <span className="font-light">{notification.message}</span>
            </div>
          </div>
        )}

        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 max-w-md w-full border border-purple-100">
          <div className="text-center mb-8">
            <Settings className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-3xl font-light text-purple-600 mb-2">Painel Admin</h1>
            <p className="text-purple-400 font-light text-sm">Selecione a unidade para fazer upload</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-purple-600 mb-2 font-light">Codigo da Unidade</label>
              <input
                type="text"
                value={unitCode}
                onChange={(e) => setUnitCode(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleUnitSelect()}
                className="w-full px-4 py-4 rounded-xl border border-purple-200 focus:border-purple-400 focus:outline-none bg-white/50 text-center text-2xl tracking-widest font-light"
                placeholder="0000"
                maxLength={4}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                <p className="text-red-500 text-sm font-light">{error}</p>
              </div>
            )}

            <button
              onClick={handleUnitSelect}
              className="w-full px-4 py-4 rounded-xl bg-gradient-to-r from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg font-light text-lg"
            >
              Selecionar Unidade
            </button>
            <button
              onClick={onBack}
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-light"
            >
              Voltar ao Inicio
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-purple-100">
            <p className="text-purple-300 text-xs font-light text-center">1515 - Palmeira dos Indios | 1048 - Penedo</p>
          </div>
        </div>
      </div>
    );
  }

  // Tela de upload da unidade selecionada
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 p-6">
      {notification && (
        <div className={`fixed top-6 right-6 z-50 p-4 rounded-xl shadow-lg border-2 ${
          notification.type === 'success'
            ? 'bg-green-50 border-green-300 text-green-700'
            : 'bg-red-50 border-red-300 text-red-700'
        }`}>
          <div className="flex items-center gap-3">
            {notification.type === 'success' ? '✅' : '❌'}
            <span className="font-light">{notification.message}</span>
          </div>
        </div>
      )}

      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4" style={{zIndex: 99999}}>
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full border-2 border-red-200">
            <h3 className="text-xl font-light text-red-600 mb-3">Confirmar Limpeza</h3>
            <p className="text-red-500 mb-6 font-light">
              Tem certeza que deseja limpar todos os dados de <strong>{selectedUnit.name}</strong>? Esta acao nao pode ser desfeita.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-light"
              >
                Cancelar
              </button>
              <button
                onClick={handleClearUnit}
                className="flex-1 px-4 py-3 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-colors font-light"
              >
                Sim, Limpar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-purple-600">Painel Admin</h1>
            <p className="text-purple-400 font-light text-sm mt-1">{selectedUnit.name}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedUnit(null)}
              className="px-4 py-2 rounded-xl bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors text-sm font-light"
            >
              Trocar Unidade
            </button>
            <button
              onClick={onBack}
              className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors text-sm font-light"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Info da unidade */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-purple-100 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-400 text-sm font-light">Itens cadastrados nesta unidade</p>
              <p className="text-3xl font-light text-purple-600 mt-1">{itemCount}</p>
            </div>
            <Package className="w-12 h-12 text-purple-300" />
          </div>
        </div>

        {/* Upload */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-purple-100 mb-6">
          <h2 className="text-xl font-light text-purple-600 mb-4">Upload de Mercadorias</h2>
          <p className="text-purple-400 text-sm font-light mb-4">
            Selecione o arquivo CSV com as mercadorias que chegaram em <strong>{selectedUnit.name}</strong>.
          </p>

          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-6">
              <Loader className="w-8 h-8 text-purple-500" />
              <p className="text-purple-500 font-light text-sm">{uploadProgress || 'Processando...'}</p>
            </div>
          ) : (
            <label className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-400 to-purple-500 text-white px-6 py-4 rounded-xl cursor-pointer hover:from-purple-500 hover:to-purple-600 transition-all shadow-lg">
              <Upload className="w-5 h-5" />
              <span className="font-light text-lg">Selecionar Arquivo CSV</span>
              <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
            </label>
          )}
        </div>

        {/* Limpar dados */}
        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-red-100">
          <h2 className="text-xl font-light text-red-500 mb-4">Zona de Perigo</h2>
          <p className="text-red-400 text-sm font-light mb-4">
            Limpar todos os dados de mercadorias de {selectedUnit.name}.
          </p>
          <button
            onClick={() => setShowClearConfirm(true)}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-red-100 text-red-600 px-6 py-3 rounded-xl hover:bg-red-200 transition-colors font-light disabled:opacity-50"
          >
            <Trash2 className="w-4 h-4" />
            Limpar Dados da Unidade
          </button>
        </div>
      </div>
    </div>
  );
};

// ==================== TELA PRINCIPAL (VISUALIZACAO) ====================
const MainView = ({ unitCode, unitInfo, onLogout }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [productSearchTerm, setProductSearchTerm] = useState('');
  const [expandedDocs, setExpandedDocs] = useState(new Set());
  const [sortOrder, setSortOrder] = useState('desc');
  const [notification, setNotification] = useState(null);
  const [viewMode, setViewMode] = useState('notes');
  const [loading, setLoading] = useState(true);

  // Buscar dados do Supabase
  const fetchItems = useCallback(async () => {
    try {
      const { data, error } = await supabaseClient
        .from('mercadorias')
        .select('*')
        .eq('unidade', unitInfo.unidade);

      if (error) {
        console.error('Erro ao buscar dados:', error);
        return;
      }

      // Mapear campos do banco para o formato usado na UI
      const mapped = (data || []).map(row => ({
        id: row.id,
        documentNumber: row.document_number,
        entryDate: row.entry_date,
        productCode: row.product_code,
        productDescription: row.product_description,
        quantity: row.quantity
      }));

      setItems(mapped);
    } catch (err) {
      console.error('Erro ao buscar dados:', err);
    }
    setLoading(false);
  }, [unitInfo.unidade]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // Atualizar dados a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(fetchItems, 10000);
    return () => clearInterval(interval);
  }, [fetchItems]);

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const filteredItems = useMemo(() => {
    let filtered = items.filter(item => {
      const matchesSearch = searchTerm === '' ||
        item.documentNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.productDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    filtered.sort((a, b) => {
      const compareValue = a.quantity - b.quantity;
      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

    return filtered;
  }, [items, searchTerm, sortOrder]);

  const groupedByDocument = useMemo(() => {
    const groups = new Map();
    filteredItems.forEach(item => {
      if (!groups.has(item.documentNumber)) {
        groups.set(item.documentNumber, []);
      }
      groups.get(item.documentNumber)?.push(item);
    });
    return groups;
  }, [filteredItems]);

  const filteredProducts = useMemo(() => {
    let filtered = items.filter(item => {
      const matchesSearch = productSearchTerm === '' ||
        item.productCode.toLowerCase().includes(productSearchTerm.toLowerCase()) ||
        item.productDescription.toLowerCase().includes(productSearchTerm.toLowerCase());
      return matchesSearch;
    });

    filtered.sort((a, b) => {
      const compareValue = a.quantity - b.quantity;
      return sortOrder === 'asc' ? compareValue : -compareValue;
    });

    return filtered;
  }, [items, productSearchTerm, sortOrder]);

  const stats = useMemo(() => {
    const totalItems = filteredItems.reduce((sum, item) => sum + item.quantity, 0);
    const uniqueDocs = groupedByDocument.size;
    return { totalItems, uniqueDocs };
  }, [filteredItems, groupedByDocument]);

  const toggleDocument = (docNumber) => {
    setExpandedDocs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(docNumber)) {
        newSet.delete(docNumber);
      } else {
        newSet.add(docNumber);
      }
      return newSet;
    });
  };

  const exportAllProductsToExcel = () => {
    if (filteredProducts.length === 0) {
      showNotification('error', 'Nenhum produto para exportar');
      return;
    }
    const data = filteredProducts.map(item => ({
      'SKU': item.productCode,
      'Produto': item.productDescription,
      'Quantidade': item.quantity
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Produtos');
    XLSX.writeFile(wb, 'todos_produtos.xlsx');
    showNotification('success', 'Excel exportado com sucesso!');
  };

  const exportAllNotesToExcel = () => {
    if (filteredItems.length === 0) {
      showNotification('error', 'Nenhuma nota para exportar');
      return;
    }
    const data = filteredItems.map(item => ({
      'Nota Fiscal': item.documentNumber,
      'Data': item.entryDate,
      'SKU': item.productCode,
      'Produto': item.productDescription,
      'Quantidade': item.quantity
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Notas');
    XLSX.writeFile(wb, 'todas_notas.xlsx');
    showNotification('success', 'Excel exportado com sucesso!');
  };

  const exportSingleNoteToExcel = (docNumber, docItems) => {
    const data = docItems.map(item => ({
      'SKU': item.productCode,
      'Produto': item.productDescription,
      'Quantidade': item.quantity
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `NF ${docNumber}`);
    XLSX.writeFile(wb, `nota_${docNumber}.xlsx`);
    showNotification('success', `Excel da NF ${docNumber} exportado!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <p className="text-pink-400 font-light text-lg">Carregando mercadorias...</p>
          <p className="text-pink-300 font-light text-sm mt-1">{unitInfo.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {notification && (
          <div className={`fixed top-6 right-6 z-50 p-4 rounded-xl shadow-lg border-2 ${
            notification.type === 'success'
              ? 'bg-green-50 border-green-300 text-green-700'
              : 'bg-red-50 border-red-300 text-red-700'
          }`}>
            <div className="flex items-center gap-3">
              {notification.type === 'success' ? '✅' : '❌'}
              <span className="font-light">{notification.message}</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-light text-pink-600 mb-1">Mercadorias</h1>
            <p className="text-pink-400 font-light text-sm">{unitInfo.name}</p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors text-sm flex items-center gap-2 font-light"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-pink-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-400 text-sm font-light">Total de Itens</p>
                <p className="text-3xl font-light text-pink-600 mt-1">{stats.totalItems}</p>
              </div>
              <Package className="w-12 h-12 text-pink-300" />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-400 text-sm font-light">Notas Fiscais</p>
                <p className="text-3xl font-light text-purple-600 mt-1">{stats.uniqueDocs}</p>
              </div>
              <FileText className="w-12 h-12 text-purple-300" />
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-pink-100 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-pink-600 mb-2 font-light">
                {viewMode === 'notes' ? 'Buscar (NF, codigo ou produto)' : 'Buscar (SKU ou produto)'}
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-300" />
                <input
                  type="text"
                  placeholder={viewMode === 'notes' ? "NF, codigo ou produto..." : "SKU ou nome do produto..."}
                  value={viewMode === 'notes' ? searchTerm : productSearchTerm}
                  onChange={(e) => viewMode === 'notes' ? setSearchTerm(e.target.value) : setProductSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none bg-white/50 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-pink-600 mb-2 font-light">Ordenacao por Quantidade</label>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="w-full px-4 py-3 rounded-xl bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors text-sm font-light"
              >
                {sortOrder === 'asc' ? '↑ Menor para Maior' : '↓ Maior para Menor'}
              </button>
            </div>
          </div>

          {items.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-pink-100">
              <button
                onClick={viewMode === 'notes' ? exportAllNotesToExcel : exportAllProductsToExcel}
                className="px-4 py-2 rounded-xl bg-green-100 text-green-600 hover:bg-green-200 transition-colors text-sm flex items-center gap-2 font-light"
              >
                <Download className="w-4 h-4" />
                Exportar Excel
              </button>
              <button
                onClick={fetchItems}
                className="px-4 py-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors text-sm flex items-center gap-2 font-light"
              >
                Atualizar
              </button>
            </div>
          )}
        </div>

        {/* Abas de navegacao */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setViewMode('notes')}
            className={`px-6 py-3 rounded-xl font-light transition-all ${
              viewMode === 'notes'
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-white/80 text-pink-600 hover:bg-pink-100 border border-pink-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Por Notas
            </div>
          </button>
          <button
            onClick={() => setViewMode('products')}
            className={`px-6 py-3 rounded-xl font-light transition-all ${
              viewMode === 'products'
                ? 'bg-pink-500 text-white shadow-lg'
                : 'bg-white/80 text-pink-600 hover:bg-pink-100 border border-pink-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Todos os Produtos
            </div>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="bg-white/80 backdrop-blur rounded-2xl p-12 text-center shadow-lg border border-pink-100">
            <Package className="w-16 h-16 text-pink-300 mx-auto mb-4" />
            <p className="text-pink-400 font-light text-lg">Nenhuma mercadoria disponivel</p>
            <p className="text-pink-300 text-sm mt-2">As mercadorias serao carregadas pelo administrador</p>
          </div>
        ) : viewMode === 'products' ? (
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-pink-100 overflow-hidden">
            <div className="p-4 bg-pink-50/50 border-b border-pink-100">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-pink-500" />
                <span className="text-pink-600 font-light">
                  {filteredProducts.length} produto(s) encontrado(s)
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-pink-50/80">
                  <tr>
                    <th className="text-left p-4 text-pink-600 font-normal text-sm">SKU</th>
                    <th className="text-left p-4 text-pink-600 font-normal text-sm">Produto</th>
                    <th className="text-right p-4 text-pink-600 font-normal text-sm">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((item) => (
                    <tr key={item.id} className="border-b border-pink-50 hover:bg-pink-50/30 transition-colors">
                      <td className="p-4 text-pink-700 font-medium">{item.productCode}</td>
                      <td className="p-4 text-pink-600 font-light">{item.productDescription}</td>
                      <td className="p-4 text-right">
                        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-light">
                          {item.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filteredProducts.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-pink-400 font-light">Nenhum produto encontrado com os filtros aplicados</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {Array.from(groupedByDocument.entries()).map(([docNumber, docItems]) => {
              const isExpanded = expandedDocs.has(docNumber);
              const totalQty = docItems.reduce((sum, item) => sum + item.quantity, 0);
              const firstItem = docItems[0];

              return (
                <div key={docNumber} className="bg-white/80 backdrop-blur rounded-2xl shadow-lg border border-pink-100 overflow-hidden">
                  <div className="p-5 cursor-pointer hover:bg-pink-50/50 transition-colors flex items-center justify-between">
                    <div
                      className="flex items-center gap-4 flex-1"
                      onClick={() => toggleDocument(docNumber)}
                    >
                      <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-3 rounded-xl shadow-md">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-pink-600">NF {docNumber}</h3>
                        <p className="text-sm text-pink-400 font-light">
                          {firstItem.entryDate} • {docItems.length} produto(s) • {totalQty} itens
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          exportSingleNoteToExcel(docNumber, docItems);
                        }}
                        className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                        title="Exportar esta nota para Excel"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <div
                        className="text-pink-400 cursor-pointer p-2"
                        onClick={() => toggleDocument(docNumber)}
                      >
                        {isExpanded ? '▲' : '▼'}
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-pink-100">
                      {docItems.map((item) => (
                        <div key={item.id} className="p-4 border-b border-pink-50 last:border-b-0 hover:bg-pink-50/30 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-pink-600 font-light">
                                <span className="font-normal">{item.productCode}</span> - {item.productDescription}
                              </p>
                            </div>
                            <div className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-light">
                              {item.quantity} unidades
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== APP PRINCIPAL (ROTEAMENTO) ====================
const App = () => {
  const [screen, setScreen] = useState('login');
  const [currentUnit, setCurrentUnit] = useState(null);

  const handleUserLogin = (code, unit) => {
    setCurrentUnit({ code, ...unit });
    setScreen('main');
  };

  const handleLogout = () => {
    setCurrentUnit(null);
    setScreen('login');
  };

  const handleAdminLogin = () => {
    setScreen('admin');
  };

  if (screen === 'login') {
    return (
      <LoginScreen
        onLogin={handleUserLogin}
        onAdminClick={() => setScreen('adminLogin')}
      />
    );
  }

  if (screen === 'adminLogin') {
    return (
      <AdminLoginScreen
        onBack={() => setScreen('login')}
        onAdminLogin={handleAdminLogin}
      />
    );
  }

  if (screen === 'admin') {
    return <AdminPanel onBack={() => setScreen('login')} />;
  }

  if (screen === 'main' && currentUnit) {
    return (
      <MainView
        unitCode={currentUnit.code}
        unitInfo={currentUnit}
        onLogout={handleLogout}
      />
    );
  }

  return null;
};

ReactDOM.render(<App />, document.getElementById('root'));
