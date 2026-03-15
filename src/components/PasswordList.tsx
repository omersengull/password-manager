import React from 'react'
import type { PasswordEntry } from '../interfaces/password';
import {
  Eye,
  EyeOff,
  Trash2,
  Edit3
} from "lucide-react";
interface PasswordListProps {
  passwords: PasswordEntry[];
  onToggleVisibility: (id: string) => void;
  onEdit: (item: PasswordEntry) => void;
  onDelete: (id: string) => void;
}
const PasswordList = ({ passwords, onToggleVisibility, onEdit, onDelete }: PasswordListProps) => {
  return (
    <div className="grid gap-4">
          {passwords.map((item:PasswordEntry) => (
            <div
              key={item.id}
              className="bg-slate-800 p-4 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center gap-3 border border-slate-700"
            >
              <div>
                <h3 className="text-lg font-semibold text-indigo-300">
                  {item.siteName}
                </h3>
                <p className="text-slate-400 text-sm">{item.userName}</p>
                <p className="font-mono mt-1">
                  {item.isVisible ? item.passwordValue : "••••••••"}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onToggleVisibility(item.id)}
                  className="p-2 hover:bg-slate-700 rounded"
                >
                  {item.isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <button
                  onClick={() => onEdit(item)}
                  className="p-2 hover:bg-slate-700 rounded text-blue-400"
                >
                  <Edit3 size={18} className="text-blue-400" />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="p-2 hover:bg-slate-700 rounded text-red-400"
                >
                  <Trash2 size={18} className="text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
  )
}

export default PasswordList